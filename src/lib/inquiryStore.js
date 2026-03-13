import { randomUUID } from "crypto";
import { appendFile, mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const DATA_DIRECTORY = path.join(process.cwd(), "data");
const INQUIRIES_FILE_PATH = path.join(DATA_DIRECTORY, "inquiries.csv");
const INQUIRY_FIELDS = [
  "id",
  "fullName",
  "companyName",
  "email",
  "countryCode",
  "contactNumber",
  "projectDetails",
  "createdAt",
];
const TOKEN_BUFFER_MS = 60000;

let graphTokenCache = globalThis.__axxionGraphTokenCache;

if (!graphTokenCache) {
  graphTokenCache = globalThis.__axxionGraphTokenCache = {
    accessToken: "",
    expiresAt: 0,
  };
}

function getEnv(name) {
  return process.env[name]?.trim();
}

function getOneDriveConfig() {
  const config = {
    tenantId: getEnv("MICROSOFT_GRAPH_TENANT_ID"),
    clientId: getEnv("MICROSOFT_GRAPH_CLIENT_ID"),
    clientSecret: getEnv("MICROSOFT_GRAPH_CLIENT_SECRET"),
    driveId: getEnv("MICROSOFT_GRAPH_DRIVE_ID"),
    workbookItemId: getEnv("MICROSOFT_GRAPH_WORKBOOK_ITEM_ID"),
    workbookPath: getEnv("MICROSOFT_GRAPH_WORKBOOK_PATH"),
    tableName: getEnv("MICROSOFT_GRAPH_TABLE_NAME") || "Inquiries",
  };

  const hasRequiredConfig =
    config.tenantId &&
    config.clientId &&
    config.clientSecret &&
    config.driveId &&
    config.tableName &&
    (config.workbookItemId || config.workbookPath);

  return hasRequiredConfig ? config : null;
}

function createInquiryRecord(inquiry) {
  return {
    id: randomUUID(),
    fullName: inquiry.fullName,
    companyName: inquiry.companyName,
    email: inquiry.email,
    countryCode: inquiry.countryCode,
    contactNumber: inquiry.contactNumber,
    projectDetails: inquiry.projectDetails,
    createdAt: new Date().toISOString(),
  };
}

function sortInquiries(inquiries) {
  return [...inquiries].sort((left, right) => {
    const leftDate = left.createdAt ? new Date(left.createdAt).getTime() : 0;
    const rightDate = right.createdAt ? new Date(right.createdAt).getTime() : 0;
    return rightDate - leftDate;
  });
}

function normalizeCellValue(value) {
  if (value === null || value === undefined) {
    return "";
  }

  return typeof value === "string" ? value : String(value);
}

function mapValuesToInquiry(values) {
  const normalizedValues = INQUIRY_FIELDS.map((_, index) => normalizeCellValue(values[index]));

  return {
    id: normalizedValues[0] || randomUUID(),
    fullName: normalizedValues[1],
    companyName: normalizedValues[2],
    email: normalizedValues[3],
    countryCode: normalizedValues[4],
    contactNumber: normalizedValues[5],
    projectDetails: normalizedValues[6],
    createdAt: normalizedValues[7] || null,
  };
}

function getInquiryRowValues(inquiry) {
  return INQUIRY_FIELDS.map((field) => inquiry[field] ?? "");
}

function escapeCsvValue(value) {
  const stringValue = String(value ?? "");

  if (/[",\r\n]/.test(stringValue)) {
    return `"${stringValue.replaceAll('"', '""')}"`;
  }

  return stringValue;
}

function parseCsv(content) {
  const rows = [];
  let currentRow = [];
  let currentValue = "";
  let insideQuotes = false;

  for (let index = 0; index < content.length; index += 1) {
    const character = content[index];
    const nextCharacter = content[index + 1];

    if (insideQuotes) {
      if (character === '"' && nextCharacter === '"') {
        currentValue += '"';
        index += 1;
      } else if (character === '"') {
        insideQuotes = false;
      } else {
        currentValue += character;
      }

      continue;
    }

    if (character === '"') {
      insideQuotes = true;
      continue;
    }

    if (character === ",") {
      currentRow.push(currentValue);
      currentValue = "";
      continue;
    }

    if (character === "\n") {
      currentRow.push(currentValue);
      rows.push(currentRow);
      currentRow = [];
      currentValue = "";
      continue;
    }

    if (character === "\r") {
      if (nextCharacter === "\n") {
        index += 1;
      }

      currentRow.push(currentValue);
      rows.push(currentRow);
      currentRow = [];
      currentValue = "";
      continue;
    }

    currentValue += character;
  }

  if (currentValue.length > 0 || currentRow.length > 0) {
    currentRow.push(currentValue);
    rows.push(currentRow);
  }

  return rows.filter((row) => row.some((value) => value !== ""));
}

async function ensureInquiriesFile() {
  await mkdir(DATA_DIRECTORY, { recursive: true });

  try {
    await writeFile(INQUIRIES_FILE_PATH, `${INQUIRY_FIELDS.join(",")}\n`, {
      encoding: "utf8",
      flag: "wx",
    });
  } catch (error) {
    if (error.code !== "EEXIST") {
      throw error;
    }
  }
}

function mapCsvRowToInquiry(row, headers) {
  const values = INQUIRY_FIELDS.map((field) => {
    const columnIndex = headers.indexOf(field);
    return columnIndex >= 0 ? row[columnIndex] ?? "" : "";
  });

  return mapValuesToInquiry(values);
}

async function appendInquiryToCsv(inquiry) {
  await ensureInquiriesFile();

  const csvRow = `${INQUIRY_FIELDS.map((field) => escapeCsvValue(inquiry[field])).join(",")}\n`;
  await appendFile(INQUIRIES_FILE_PATH, csvRow, "utf8");

  return inquiry;
}

async function getInquiriesFromCsv() {
  await ensureInquiriesFile();

  const content = await readFile(INQUIRIES_FILE_PATH, "utf8");
  const rows = parseCsv(content);

  if (rows.length === 0) {
    return [];
  }

  const [headers, ...records] = rows;

  return sortInquiries(records.map((row) => mapCsvRowToInquiry(row, headers)));
}

function encodeGraphPath(pathValue) {
  return pathValue
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function getWorkbookGraphPath(config) {
  if (config.workbookItemId) {
    return `/drives/${encodeURIComponent(config.driveId)}/items/${encodeURIComponent(config.workbookItemId)}/workbook`;
  }

  return `/drives/${encodeURIComponent(config.driveId)}/root:/${encodeGraphPath(config.workbookPath)}:/workbook`;
}

async function getGraphAccessToken(config) {
  const now = Date.now();

  if (graphTokenCache.accessToken && graphTokenCache.expiresAt - TOKEN_BUFFER_MS > now) {
    return graphTokenCache.accessToken;
  }

  const response = await fetch(
    `https://login.microsoftonline.com/${encodeURIComponent(config.tenantId)}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: config.clientId,
        client_secret: config.clientSecret,
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }).toString(),
      cache: "no-store",
    }
  );

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      payload.error_description || payload.error?.message || "Unable to authenticate with Microsoft Graph."
    );
  }

  graphTokenCache.accessToken = payload.access_token;
  graphTokenCache.expiresAt = now + Number(payload.expires_in || 0) * 1000;

  return graphTokenCache.accessToken;
}

async function graphRequest(config, graphPath, options = {}) {
  const accessToken = await getGraphAccessToken(config);
  const requestUrl = graphPath.startsWith("http")
    ? graphPath
    : `https://graph.microsoft.com/v1.0${graphPath}`;
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
    ...options.headers,
  };

  if (options.body && !headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(requestUrl, {
    ...options,
    headers,
    cache: "no-store",
  });

  const responseText = await response.text();
  let payload = null;

  if (responseText) {
    try {
      payload = JSON.parse(responseText);
    } catch {
      payload = responseText;
    }
  }

  if (!response.ok) {
    const errorMessage =
      typeof payload === "object" && payload !== null
        ? payload.error?.message || payload.error_description || payload.message
        : responseText;

    throw new Error(errorMessage || `Microsoft Graph request failed with status ${response.status}.`);
  }

  return payload;
}

async function appendInquiryToOneDrive(inquiry, config) {
  const workbookGraphPath = getWorkbookGraphPath(config);
  const tableSegment = encodeURIComponent(config.tableName);

  await graphRequest(config, `${workbookGraphPath}/tables/${tableSegment}/rows/add`, {
    method: "POST",
    body: JSON.stringify({
      index: null,
      values: [getInquiryRowValues(inquiry)],
    }),
  });

  return inquiry;
}

function mapOneDriveRowToInquiry(row) {
  const values = Array.isArray(row?.values?.[0]) ? row.values[0] : [];
  return mapValuesToInquiry(values);
}

async function getInquiriesFromOneDrive(config) {
  const workbookGraphPath = getWorkbookGraphPath(config);
  const tableSegment = encodeURIComponent(config.tableName);
  let nextPage = `${workbookGraphPath}/tables/${tableSegment}/rows?$top=500`;
  const inquiries = [];

  while (nextPage) {
    const payload = await graphRequest(config, nextPage);
    const rows = Array.isArray(payload?.value) ? payload.value : [];

    inquiries.push(...rows.map((row) => mapOneDriveRowToInquiry(row)));
    nextPage = typeof payload?.["@odata.nextLink"] === "string" ? payload["@odata.nextLink"] : null;
  }

  return sortInquiries(inquiries);
}

export async function appendInquiry(inquiry) {
  const inquiryRecord = createInquiryRecord(inquiry);
  const oneDriveConfig = getOneDriveConfig();

  if (oneDriveConfig) {
    return appendInquiryToOneDrive(inquiryRecord, oneDriveConfig);
  }

  return appendInquiryToCsv(inquiryRecord);
}

export async function getInquiries() {
  const oneDriveConfig = getOneDriveConfig();

  if (oneDriveConfig) {
    return getInquiriesFromOneDrive(oneDriveConfig);
  }

  return getInquiriesFromCsv();
}

export { INQUIRIES_FILE_PATH };
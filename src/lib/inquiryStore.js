import { createClient } from "@supabase/supabase-js";

let supabaseClient = null;

function createStoreError(message, statusCode = 500) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

function getRequiredEnv(name) {
  const value = process.env[name]?.trim();

  if (!value) {
    const error = createStoreError(
      `Supabase is not configured. Missing environment variable: ${name}.`
    );
    error.code = "SUPABASE_NOT_CONFIGURED";
    throw error;
  }

  return value;
}

function getSupabaseClient() {
  if (!supabaseClient) {
    supabaseClient = createClient(
      getRequiredEnv("VITE_SUPABASE_URL"),
      getRequiredEnv("VITE_SUPABASE_ANON_KEY"),
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );
  }

  return supabaseClient;
}

function normalizeValue(value) {
  return typeof value === "string" ? value.trim() : "";
}

function buildPhone(countryCode, contactNumber) {
  return [normalizeValue(countryCode), normalizeValue(contactNumber)].filter(Boolean).join(" ");
}

function splitPhone(phone) {
  const value = normalizeValue(phone);

  if (!value) {
    return { countryCode: "", contactNumber: "" };
  }

  const [countryCode, ...rest] = value.split(/\s+/);

  if (!countryCode.startsWith("+")) {
    return { countryCode: "", contactNumber: value };
  }

  return {
    countryCode,
    contactNumber: rest.join(" "),
  };
}

function createQuoteRequestRecord(inquiry, requestId) {
  const createdAt = new Date().toISOString();
  const payload = buildSubmitPayload(inquiry);

  return {
    id: requestId,
    created_at: createdAt,
    updated_at: createdAt,
    site_name: payload.siteName,
    name: payload.name,
    phone: payload.phone,
    email: payload.email,
    suburb: payload.suburb,
    service: payload.service,
    contact_method: payload.contactMethod,
    message: payload.message,
    photo_url: null,
    email_status: "pending",
    email_provider_message_id: null,
    email_error: null,
    email_sent_at: null,
    processed_at: null,
  };
}

function mapQuoteRequestToInquiry(quoteRequest) {
  const phone = splitPhone(quoteRequest.phone);

  return {
    id: quoteRequest.id,
    fullName: quoteRequest.name || "",
    companyName: quoteRequest.service || "",
    email: quoteRequest.email || "",
    countryCode: phone.countryCode,
    contactNumber: phone.contactNumber,
    projectDetails: quoteRequest.message || "",
    createdAt: quoteRequest.created_at || null,
    quoteRequest,
  };
}

function buildSubmitPayload(inquiry) {
  return {
    siteName: getRequiredEnv("VITE_SITE_NAME"),
    name: normalizeValue(inquiry.fullName),
    phone: buildPhone(inquiry.countryCode, inquiry.contactNumber),
    email: normalizeValue(inquiry.email),
    suburb: "",
    service: normalizeValue(inquiry.companyName),
    contactMethod: "Phone",
    message: normalizeValue(inquiry.projectDetails),
  };
}

export async function appendInquiry(inquiry) {
  const { data, error } = await getSupabaseClient().functions.invoke(
    getRequiredEnv("VITE_SUPABASE_SUBMIT_QUOTE_FUNCTION"),
    {
      body: buildSubmitPayload(inquiry),
    }
  );

  if (error) {
    const serverError = data && typeof data === "object" ? data : null;
    throw createStoreError(serverError?.error || error.message || "Unable to save the inquiry.");
  }

  const requestId = data?.requestId;

  if (typeof requestId !== "string" || requestId.length === 0) {
    throw createStoreError("Inquiry was submitted, but no request id was returned.");
  }

  return mapQuoteRequestToInquiry(createQuoteRequestRecord(inquiry, requestId));
}

export async function getInquiries() {
  throw createStoreError(
    "Loading quote requests requires a server-side Supabase reader. The current Axxion setup only provides submit credentials.",
    501
  );
}

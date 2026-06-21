import nodemailer from "nodemailer";
import { COMPANY_EMAIL } from "@/content/home";
import { appendInquiry } from "@/lib/inquiryStore";

export const runtime = "nodejs";

const REQUIRED_SMTP_ENV_NAMES = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];

function getEnv(name) {
  return process.env[name]?.trim();
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getEmailConfig() {
  const missingEnvNames = REQUIRED_SMTP_ENV_NAMES.filter((name) => !getEnv(name));

  if (missingEnvNames.length > 0) {
    const error = new Error(
      `Email delivery is not configured. Missing environment variables: ${missingEnvNames.join(", ")}.`
    );
    error.statusCode = 500;
    throw error;
  }

  const port = Number(getEnv("SMTP_PORT"));

  if (!Number.isInteger(port) || port <= 0) {
    const error = new Error("Email delivery is not configured. SMTP_PORT must be a valid port number.");
    error.statusCode = 500;
    throw error;
  }

  return {
    host: getEnv("SMTP_HOST"),
    port,
    user: getEnv("SMTP_USER"),
    pass: getEnv("SMTP_PASS"),
    from: getEnv("INQUIRY_FROM_EMAIL") || getEnv("SMTP_USER"),
    to: COMPANY_EMAIL,
  };
}

function createTransporter(config) {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });
}

function createInquiryEmail({ savedInquiry, fullName, companyName, email, countryCode, contactNumber, projectDetails }) {
  const submittedAt = savedInquiry.createdAt || new Date().toISOString();
  const contactPhone = `${countryCode} ${contactNumber}`;

  return {
    subject: `New website inquiry from ${fullName}`,
    text: [
      "A new inquiry/request was submitted from the Axxion website.",
      "",
      `Inquiry ID: ${savedInquiry.id}`,
      `Submitted at: ${submittedAt}`,
      `Full name: ${fullName}`,
      `Company name: ${companyName}`,
      `Email: ${email}`,
      `Contact number: ${contactPhone}`,
      "",
      "Project details/request:",
      projectDetails,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2 style="margin-bottom: 16px;">New website inquiry/request</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
          <tbody>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 10px; font-weight: 700;">Inquiry ID</td>
              <td style="border: 1px solid #cbd5e1; padding: 10px;">${escapeHtml(savedInquiry.id)}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 10px; font-weight: 700;">Submitted at</td>
              <td style="border: 1px solid #cbd5e1; padding: 10px;">${escapeHtml(submittedAt)}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 10px; font-weight: 700;">Full name</td>
              <td style="border: 1px solid #cbd5e1; padding: 10px;">${escapeHtml(fullName)}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 10px; font-weight: 700;">Company name</td>
              <td style="border: 1px solid #cbd5e1; padding: 10px;">${escapeHtml(companyName)}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 10px; font-weight: 700;">Email</td>
              <td style="border: 1px solid #cbd5e1; padding: 10px;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 10px; font-weight: 700;">Contact number</td>
              <td style="border: 1px solid #cbd5e1; padding: 10px;">${escapeHtml(contactPhone)}</td>
            </tr>
          </tbody>
        </table>
        <p style="margin-top: 20px;"><strong>Project details/request:</strong></p>
        <div style="white-space: pre-wrap; border: 1px solid #cbd5e1; border-radius: 12px; padding: 16px; background: #f8fafc;">
          ${escapeHtml(projectDetails)}
        </div>
      </div>
    `,
  };
}

export async function POST(req) {
  try {
    const body = await req.json();
    const fullName = body.fullName?.trim();
    const companyName = body.companyName?.trim();
    const email = body.email?.trim();
    const countryCode = body.countryCode?.trim();
    const contactNumber = body.contactNumber?.trim();
    const projectDetails = body.projectDetails?.trim();

    if (!fullName || !companyName || !email || !countryCode || !contactNumber || !projectDetails) {
      return Response.json(
        {
          success: false,
          error: "Full name, company name, email, contact number, and project details are required.",
        },
        { status: 400 }
      );
    }

    const emailConfig = getEmailConfig();
    const savedInquiry = await appendInquiry({
      fullName,
      companyName,
      email,
      countryCode,
      contactNumber,
      projectDetails,
    });
    const transporter = createTransporter(emailConfig);
    const inquiryEmail = createInquiryEmail({
      savedInquiry,
      fullName,
      companyName,
      email,
      countryCode,
      contactNumber,
      projectDetails,
    });

    await transporter.sendMail({
      from: emailConfig.from,
      to: emailConfig.to,
      replyTo: email,
      subject: inquiryEmail.subject,
      text: inquiryEmail.text,
      html: inquiryEmail.html,
    });

    return Response.json({ success: true, inquiryId: savedInquiry.id }, { status: 200 });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message || "Unable to save your inquiry right now.",
      },
      { status: error.statusCode || 500 }
    );
  }
}


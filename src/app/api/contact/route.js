import nodemailer from "nodemailer";

function getRequiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
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

    const host = getRequiredEnv("SMTP_HOST");
    const port = Number(getRequiredEnv("SMTP_PORT"));
    const user = getRequiredEnv("SMTP_USER");
    const pass = getRequiredEnv("SMTP_PASS");
    const to = getRequiredEnv("INQUIRY_TO_EMAIL");
    const from = process.env.INQUIRY_FROM_EMAIL?.trim() || user;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `New inquiry from ${fullName}`,
      text: [
        "A new inquiry was submitted.",
        "",
        `Full name: ${fullName}`,
        `Company name: ${companyName}`,
        `Email: ${email}`,
        `Contact number: ${countryCode} ${contactNumber}`,
        "",
        "Project details:",
        projectDetails,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin-bottom: 16px;">New inquiry submitted</h2>
          <p><strong>Full name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Company name:</strong> ${escapeHtml(companyName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Contact number:</strong> ${escapeHtml(countryCode)} ${escapeHtml(contactNumber)}</p>
          <p><strong>Project details:</strong></p>
          <div style="white-space: pre-wrap; border: 1px solid #cbd5e1; border-radius: 12px; padding: 16px; background: #f8fafc;">
            ${escapeHtml(projectDetails)}
          </div>
        </div>
      `,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message || "Unable to send your inquiry right now.",
      },
      { status: 500 }
    );
  }
}

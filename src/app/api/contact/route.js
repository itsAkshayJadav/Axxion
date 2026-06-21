import { appendInquiry } from "@/lib/inquiryStore";

export const runtime = "nodejs";

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

    const savedInquiry = await appendInquiry({
      fullName,
      companyName,
      email,
      countryCode,
      contactNumber,
      projectDetails,
    });

    return Response.json({ success: true, inquiryId: savedInquiry.id }, { status: 200 });
  } catch (error) {
    return Response.json(
      {
        success: false,
        code: error.code,
        error: error.message || "Unable to save your inquiry right now.",
      },
      { status: error.statusCode || 500 }
    );
  }
}


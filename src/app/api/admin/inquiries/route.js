import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";

export const dynamic = "force-dynamic";

function isAuthorized(req) {
  const configuredKey = process.env.ADMIN_PANEL_KEY;

  if (!configuredKey) {
    return false;
  }

  const providedKey = req.headers.get("x-admin-key")?.trim();
  return providedKey === configuredKey;
}

export async function GET(req) {
  try {
    if (!isAuthorized(req)) {
      return Response.json(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }

    await connectDB();

    const inquiries = await Lead.find({})
      .sort({ createdAt: -1 })
      .lean();

    return Response.json(
      {
        success: true,
        inquiries: inquiries.map((inquiry) => ({
          id: inquiry._id.toString(),
          fullName: inquiry.fullName,
          companyName: inquiry.companyName,
          email: inquiry.email,
          countryCode: inquiry.countryCode,
          contactNumber: inquiry.contactNumber,
          projectDetails: inquiry.projectDetails,
          createdAt: inquiry.createdAt,
        })),
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message || "Unable to load inquiries right now.",
      },
      { status: 500 }
    );
  }
}

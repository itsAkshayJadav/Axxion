import { getInquiries } from "@/lib/inquiryStore";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

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

    const inquiries = await getInquiries();

    return Response.json(
      {
        success: true,
        inquiries,
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


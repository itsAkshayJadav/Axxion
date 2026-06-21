import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

const INQUIRY_COLUMNS = [
  "id",
  "full_name",
  "company_name",
  "email",
  "country_code",
  "contact_number",
  "project_details",
  "created_at",
].join(",");

function createStoreError(message, statusCode = 500) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

function throwSupabaseError(error, fallbackMessage) {
  if (error) {
    throw createStoreError(error.message || fallbackMessage);
  }
}

function mapInquiry(row) {
  if (!row) {
    return null;
  }

  return {
    id: row.id,
    fullName: row.full_name,
    companyName: row.company_name,
    email: row.email,
    countryCode: row.country_code,
    contactNumber: row.contact_number,
    projectDetails: row.project_details,
    createdAt: row.created_at,
  };
}

export async function appendInquiry(inquiry) {
  const { data, error } = await getSupabaseAdmin()
    .from("inquiries")
    .insert({
      full_name: inquiry.fullName,
      company_name: inquiry.companyName,
      email: inquiry.email,
      country_code: inquiry.countryCode,
      contact_number: inquiry.contactNumber,
      project_details: inquiry.projectDetails,
    })
    .select(INQUIRY_COLUMNS)
    .single();

  throwSupabaseError(error, "Unable to save the inquiry in Supabase.");
  return mapInquiry(data);
}

export async function getInquiries() {
  const { data, error } = await getSupabaseAdmin()
    .from("inquiries")
    .select(INQUIRY_COLUMNS)
    .order("created_at", { ascending: false });

  throwSupabaseError(error, "Unable to load inquiries from Supabase.");
  return (data || []).map(mapInquiry);
}

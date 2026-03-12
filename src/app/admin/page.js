import AdminInquiriesPanel from "@/components/AdminInquiriesPanel";

export const metadata = {
  title: "AXXION Admin | Inquiries",
  description: "Admin panel for reviewing submitted inquiries.",
};

export const dynamic = "force-dynamic";

export default function AdminPage() {
  return <AdminInquiriesPanel />;
}

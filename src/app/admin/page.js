import AdminInquiriesPanel from "@/components/AdminInquiriesPanel";

export const metadata = {
  title: "AXXION Admin | Inquiries",
  description: "Admin panel for reviewing submitted inquiries.",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default function AdminPage() {
  return <AdminInquiriesPanel />;
}

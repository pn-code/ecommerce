import AdminNavbar from "@/components/navigation/admin/AdminNavbar";
import AdminSubNavbar from "@/components/navigation/admin/AdminSubNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AdminNavbar />
      <AdminSubNavbar />
      <main className="p-6">{children}</main>
    </div>
  );
}

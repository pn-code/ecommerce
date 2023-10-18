import AdminNavbar from "@/components/navigation/admin/AdminNavbar";
import AdminSubNavbar from "@/components/navigation/admin/AdminSubNavbar";
import { isCurrentUserAdmin } from "@/helpers/isCurrentUserAdmin";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdmin = await isCurrentUserAdmin();

  if (!isAdmin) {
    redirect("/");
  }

  return (
    <div>
      <AdminNavbar />
      <AdminSubNavbar />
      <main className="p-6">{children}</main>
    </div>
  );
}

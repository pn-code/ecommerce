import Footer from "@/components/navigation/main/Footer";
import Navbar from "@/components/navigation/main/Navbar";
import SubNavbar from "@/components/navigation/main/SubNavbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <main className="p-2 md:p-6 md:min-h-[calc(100vh-300px)]">{children}</main>
      <Footer />
    </div>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import SubNavbar from "@/components/navigation/SubNavbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Uncle Ben's Meat Factory",
    description: "Go no further to find Uncle Ben's Fresh Meat",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    {/* <Navbar />
                    <SubNavbar /> */}
                    <main className="px-6 py-4">{children}</main>
                </body>
            </html>
        </ClerkProvider>
    );
}

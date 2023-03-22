import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
    title: "E-Commerce",
    description: "Buy items with money",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}

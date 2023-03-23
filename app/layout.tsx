import "./globals.css";
import Navbar from "../components/Navbar";
import { CartProvider } from "@/contexts/CartContext";

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
                <CartProvider>
                    <Navbar />
                    {children}
                </CartProvider>
            </body>
        </html>
    );
}

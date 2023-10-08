import React from "react";

export default function CreateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full h-full flex justify-center items-center">
            {children}
        </div>
    );
}

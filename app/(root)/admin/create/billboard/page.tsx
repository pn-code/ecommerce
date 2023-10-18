import CreateBillboardForm from "@/components/forms/billboards/CreateBillboardForm";
import React from "react";

export default function CreateBillboardPage() {
    return (
        <div className="flex flex-col gap-4 p-6 shadow-sm">
            <header className="flex justify-between">
                <h2 className="text-lg font-semibold">New Billboard</h2>
            </header>

            <CreateBillboardForm />
        </div>
    );
}

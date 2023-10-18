import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function AdminCollectionsPage() {
    return (
        <div>
            <header className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Your Collections</h2>

                <Button>
                    <Link href="/admin/create/collection">Create Collection</Link>
                </Button>
            </header>
        </div>
    );
}

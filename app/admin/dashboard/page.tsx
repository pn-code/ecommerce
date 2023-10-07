import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function DashboardPage() {
  return (
    <div>
      <header className="flex justify-between">
        <h2 className="text-lg font-semibold">Admin Dashboard</h2>
        <div className="flex gap-4">
          <Button>
            <Link href="/admin/create/category">Create Category</Link>
          </Button>
          <Button>
            <Link href="/admin/create/product">Create Product</Link>
          </Button>
        </div>
      </header>
    </div>
  );
}

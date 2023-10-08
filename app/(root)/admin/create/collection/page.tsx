"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function CreateCategoryPage() {
  const [categoryName, setCategoryName] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <header className="flex justify-between">
        <h2 className="text-lg font-semibold">New Category</h2>
      </header>

      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="name">Name:</label>
          <Input
            onChange={(e) => setCategoryName(e.target.value)}
            id="name"
            className="w-52"
            value={categoryName}
          />
        </div>

        <div className="flex gap-2">
          <Button variant="ghost">
            <Link href="/admin/dashboard">Cancel</Link>
          </Button>
          <Button>Create</Button>
        </div>
      </form>
    </div>
  );
}

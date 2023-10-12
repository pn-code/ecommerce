import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const categories = ["beef", "pork", "chicken", "seafood"];

export default function SubNavbar() {
  return (
    <ul className="flex gap-2 md:gap-4 px-3 w-full bg-slate-100">
      {categories.map((category) => (
        <li key={category}>
          <Button variant="link">
            <Link href={`/products/${category}`}>{category}</Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}

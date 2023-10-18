"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
    "dashboard",
    "collections",
    "products",
    "billboard",
    "settings",
];

export default function AdminSubNavbar() {
    const path = usePathname();
    const currentPath = path.split("/")[2];

    return (
        <ul className="flex gap-1 px-3 w-full bg-slate-100 flex-wrap">
            {categories.map((category) => (
                <li key={category}>
                    <Button
                        className={cn(
                            "",
                            currentPath === category && "underline"
                        )}
                        variant="link"
                    >
                        <Link href={`/admin/${category}`}>{category}</Link>
                    </Button>
                </li>
            ))}
            <li>
                <Button variant="link">
                    <Link href={`/`}>main site</Link>
                </Button>
            </li>
        </ul>
    );
}

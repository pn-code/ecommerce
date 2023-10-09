import Image from "next/image";

import Logo from "@/public/meat_logo.svg";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function AdminNavbar() {
  return (
    <nav className="w-full flex justify-between h-20 items-center px-4">
      <header className="flex gap-2 items-center">
        <Image
          className="p-1 rounded-full h-16 w-16"
          src={Logo}
          alt="Logo"
          height={100}
          width={100}
        />
        <h1 className="text-xl font-semibold">Uncle Ben&apos;s Admin Page</h1>
      </header>

      {/* Content */}
      <div className="flex gap-4">
        <Button variant="outline">
          <Link href="/admin/create/collection">Create Collection</Link>
        </Button>
        <Button>
          <Link href="/admin/create/product">Create Product</Link>
        </Button>
      </div>
    </nav>
  );
}

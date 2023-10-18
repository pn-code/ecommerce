import Image from "next/image";

import Logo from "@/public/meat_logo.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GearIcon, RocketIcon } from "@radix-ui/react-icons";
import { UserButton } from "@clerk/nextjs";

export default function AdminNavbar() {
    return (
        <nav className="w-full flex flex-col md:flex-row justify-between md:h-20 mb-2 md:mb-0 items-center px-4">
            <header className="flex gap-2 items-center p-1 md:p-0">
                <Image
                    className="p-1 rounded-full h-10 w-10 md:h-16 md:w-16"
                    src={Logo}
                    alt="Logo"
                    height={100}
                    width={100}
                />
                <h1 className="hidden md:flex text-xl font-semibold">
                    Uncle Ben&apos;s Admin Page
                </h1>
                <h1 className="md:hidden text-lg font-semibold">UBMF Admin</h1>
            </header>

            {/* Content */}
            <div className="flex gap-4">
                <Button className="bg-indigo-700 hover:bg-indigo-800">
                    <Link className="flex gap-1 items-center" href="/">
                        <RocketIcon /> Main Site
                    </Link>
                </Button>
                <Button>
                    <Link
                        className="flex gap-1 items-center"
                        href="/admin/settings"
                    >
                        <GearIcon /> Settings
                    </Link>
                </Button>
                <UserButton afterSignOutUrl="/"/>
            </div>
        </nav>
    );
}

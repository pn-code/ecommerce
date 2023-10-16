import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/meat_logo.svg";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import { getCarts } from "@/helpers/carts/getCarts";

export default async function Navbar() {
    const user = await currentUser();
    const carts = await getCarts();

    return (
        <nav className="w-full flex justify-between mb-2 md:mb-0 md:h-20 items-center px-4 flex-col md:flex-row">
            <header className="flex gap-2 items-center justify-center py-4">
                <Button
                    className="p-0 h-full rounded-full hover:bg-slate-300"
                    variant="ghost"
                >
                    <Link href="/">
                        <Image
                            className="p-1 rounded-full h-16 w-16"
                            src={Logo}
                            alt="Logo"
                            height={100}
                            width={100}
                        />
                    </Link>
                </Button>
                <h1 className="text-lg md:text-xl font-semibold">
                    Uncle Ben&apos;s Meat Factory
                </h1>
            </header>

            {/* Searchbar */}
            <form className="hidden md:flex gap--1">
                <Input
                    className="w-full md:w-[500px]"
                    placeholder="Search All Products"
                />
                <Button>
                    <MagnifyingGlassIcon fontSize={100} />
                </Button>
            </form>

            {/* Content */}
            <ul className="flex gap-2 w-full md:w-fit justify-between">
                <li>
                    <Button className="w-[100px] md:w-full">
                        <Link href="/orders">Orders</Link>
                    </Button>
                </li>
                <li>
                    <Button className="w-[100px] pr-6 md:w-full relative">
                        <Link href="/cart">Cart</Link>
                        {carts && (
                            <span className="absolute top-1 right-1 bg-red-500 w-3.5 h-3.5 rounded-full flex items-center justify-center text-xs">
                                {carts.length}
                            </span>
                        )}
                    </Button>
                </li>
                {!user ? (
                    <li>
                        <Button className="w-[100px] md:w-full">
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </li>
                ) : (
                    <li className="ml-2">
                        <UserButton afterSignOutUrl="/" />
                    </li>
                )}
            </ul>
        </nav>
    );
}

import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/meat_logo.svg";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import { getCarts } from "@/helpers/carts/getCarts";
import { isCurrentUserAdmin } from "@/helpers/isCurrentUserAdmin";
import SearchBar from "./SearchBar";
import { getProducts } from "@/helpers/products/getProducts";
import { getCollections } from "@/helpers/collections/getCollections";
import { cn } from "@/lib/utils";

export default async function Navbar() {
  const user = await currentUser();
  const admin = await isCurrentUserAdmin();

  const carts = await getCarts();
  const collections = (await getCollections()) as Collection[];
  const products = collections.map((collection) => collection.products).flat();

  if (!collections) throw new Error("Collections could not be loaded.");

  return (
    <nav className="w-full flex justify-between mb-2 md:mb-0 md:h-20 items-center px-2 md:px-10 flex-1">
      <header className="flex gap-1 md:gap-2 items-center py-1 md:py-4 md:flex-1 min-width-[100px]">
        <Button
          className="p-0 h-full rounded-full hover:bg-slate-200"
          variant="ghost"
        >
          <Link href="/">
            <Image
              className="p-1 rounded-full h-12 w-12 md:h-16 md:w-16"
              src={Logo}
              alt="Logo"
              height={100}
              width={100}
            />
          </Link>
        </Button>
        <h1 className="text-lg md:text-xl font-semibold hidden md:flex">
          Uncle Ben&apos;s Meat Factory
        </h1>
        <h1 className="text-lg font-semibold md:hidden">UBMF</h1>

        {admin && (
          <Button
            variant="outline"
            className="p-0 px-1 bg-slate-100 hover:bg-slate-200 hidden md:flex"
          >
            <Link href="/admin/dashboard">ADMIN</Link>
          </Button>
        )}
      </header>

      <SearchBar products={products} />

      {/* Content */}
      <ul className="flex gap-2 md:w-fit flex-1 justify-end">
        <li>
          <Button className={cn("md:w-full", !user && "hidden")}>
            <Link
              className={cn("", !user && "cursor-not-allowed")}
              href="/orders"
            >
              Orders
            </Link>
          </Button>
        </li>
        <li>
          <Button className={cn("pr-6 md:w-full relative", !user && "hidden")}>
            <Link
              className={cn("", !user && "cursor-not-allowed")}
              href="/cart"
            >
              Cart
            </Link>
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

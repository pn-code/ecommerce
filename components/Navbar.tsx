"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
    const { value: cart } = useCart();

    return (
        <nav className="flex justify-between px-4 py-4 items-center h-16">
            <Link href={"/"}>
                <h1 className="text-2xl font-bold">Ebazon</h1>
            </Link>

            <ul className="flex gap-8 mt-1">
                <li className="font-semibold text-lg hover:underline duration-200 ease-in">
                    <Link href={"/"}>Shop</Link>
                </li>
                <li className="hover:scale-105 duration-200 ease-in">
                    <Link className="relative" href={"/cart"}>
                        <AiOutlineShoppingCart size={30} />
                        <span className="absolute -top-3 -right-2 bg-red-500 text-white px-1 text-sm rounded-md">
                            {cart.length}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

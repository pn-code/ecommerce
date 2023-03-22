import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <Link href={"/"}>
                <div className="company-logo">
                    <h1 className="logo-text">Ebazon</h1>
                </div>
            </Link>

            <ul className="navbar-directory">
                <li>
                    <Link href={"/"}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>

                        Shop
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>My Cart : 0</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

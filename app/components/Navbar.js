import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <Link>
                <div className="company-logo">
                    <h1 className="logo-text">Ebazon</h1>
                </div>
            </Link>

            <ul className="navbar-directory">
                <li>
                    <Link>
                        About
                    </Link>
                </li>
                <li>
                    <Link>

                        Shop
                    </Link>
                </li>
                <li>
                    <Link>My Cart : 0</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

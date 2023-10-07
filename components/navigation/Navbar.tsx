import Logo from "@/public/meat_logo.svg";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Navbar() {

  return (
    <nav className="w-full flex justify-between h-20 items-center px-4">
      <header className="flex gap-2 items-center">
        <Image className="p-1 rounded-full h-16 w-16" src={Logo} alt="Logo" height={100} width={100} />
        <h1 className="text-xl font-semibold">Uncle Ben's Meat Factory</h1>
      </header>

      {/* Searchbar */}
      <form className="flex gap-1">
        <Input className="w-full md:w-[500px]" placeholder="Search All Products"/>
        <Button>
            <MagnifyingGlassIcon fontSize={100}/>
        </Button>
      </form>

      {/* Content */}
        <ul className="flex gap-2">
            <li>
                <Button>
                    Login
                </Button>
            </li>
            <li>
                <Button>
                    Orders
                </Button>
            </li>
            <li>
                <Button>
                    Cart
                </Button>
            </li>
        </ul>
    </nav>
  );
}
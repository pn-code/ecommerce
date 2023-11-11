"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface SearchBarProps {
  products: Product[];
}

export default function SearchBar({ products }: SearchBarProps) {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);

  const router = useRouter();

  useEffect(() => {
    const autoSuggest = () => {
      if (searchInput === "") {
        setSuggestions([]);
      } else {
        const matches = products
          .filter((result) =>
            result.name.toLowerCase().includes(searchInput.toLowerCase())
          )
          .slice(0, 5);

        setSuggestions(matches);
      }
    };

    autoSuggest();
  }, [searchInput, products]);

  const clearInput = () => {
    setSearchInput("");
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput.trim() === "") {
      toast.error("User must include a search phrase to search.");
    } else {
      // Handle string spaces
      const modifiedStr = searchInput.toLowerCase().trim().split(" ").join("_");
      router.push(`/products/search/${modifiedStr}`);
      clearInput();
    }
  };

  return (
    <div className="flex flex-col relative flex-1 items-start">
      <form onSubmit={handleSearch} className="hidden lg:flex gap-1 relative">
        <Input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className="w-full md:w-[500px]"
          placeholder="Search All Products"
        />
        <Button onClick={clearInput} type="button" variant="link" className="text-slate-400 absolute right-12 hover:text-slate-600 duration-100 ease-linear">X</Button>
        <Button type="submit">
          <MagnifyingGlassIcon fontSize={100} />
        </Button>
      </form>

      {/* Suggestions */}
      <div className="hidden lg:flex w-[90%] flex-col absolute top-10 z-20">
        {suggestions.length === 0 && searchInput !== "" && (
          <div className="px-3 bg-slate-50 border-b-2 border-slate-200 py-1 hover:bg-slate-100">
            No Results Found
          </div>
        )}
        {suggestions.map((suggestion) => (
          <Link
            onClick={clearInput}
            className="px-3 bg-slate-50 border-b-2 border-slate-200 py-1 hover:bg-slate-100"
            key={suggestion.name + "_" + suggestion.id}
            href={`/products/product/${suggestion.id}`}
          >
            {suggestion.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

interface SearchBarProps {
  products: Product[];
  collections: Collection[];
}

export default function SearchBar({ products, collections }: SearchBarProps) {
  const possibleSearchResults = [...collections, ...products];

  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState<(Collection | Product)[]>([]);

  useEffect(() => {
    const autoSuggest = () => {
      if (searchInput === "") {
        setSuggestions([]);
      } else {
        const matches = possibleSearchResults.filter((result) =>
          result.name.toLowerCase().includes(searchInput.toLowerCase())
        );

        setSuggestions(matches);
      }
    };

    autoSuggest();
  }, [searchInput]);

  const isCollection = (item: any) => {
    if (item.products) {
      return true;
    }
    return false;
  };

  const handleClickSearchItem = () => {
    setSearchInput("");
  };

  return (
    <div className="flex flex-col relative">
      <form className="hidden lg:flex gap-1">
        <Input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className="w-full md:w-[500px]"
          placeholder="Search All Products"
        />
        <Button>
          <MagnifyingGlassIcon fontSize={100} />
        </Button>
      </form>

      {/* Suggestions */}
      <div className="w-full flex flex-col absolute top-10 z-20">
        {suggestions.length === 0 && searchInput !== "" && (
          <div className="px-3 bg-slate-50 border-b-2 border-slate-200 py-1 hover:bg-slate-100">
            No Results Found
          </div>
        )}
        {suggestions.map((suggestion) => (
          <Link
            onClick={handleClickSearchItem}
            className="px-3 bg-slate-50 border-b-2 border-slate-200 py-1 hover:bg-slate-100"
            key={suggestion.name + "_" + suggestion.id}
            href={
              isCollection(suggestion)
                ? `/products/${suggestion.name.toLowerCase()}`
                : `/products/product/${suggestion.id}`
            }
          >
            {isCollection(suggestion)
              ? `${suggestion.name} Collection`
              : suggestion.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

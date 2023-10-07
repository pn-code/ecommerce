import React from "react";
import ProductCard from "../products/ProductCard";
import { products } from "@/data/products";

export default function SpecialSection() {
  return (
    <div className="flex flex-col gap-4">
      <header>
        <h2 className="text-lg font-semibold">Today's Special Items</h2>
        <p className="text-sm text-slate-800">Buy now before items run out!</p>
      </header>

      <div className="w-full flex gap-2 flex-wrap">
        {products.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </div>
  );
}

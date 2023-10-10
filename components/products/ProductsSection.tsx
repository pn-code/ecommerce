"use client";

import { usePathname } from "next/navigation";

import ProductCard from "@/components/products/ProductCard";

interface ProductsSectionProps {
  products: Product[];
}

const validPaths = ["chicken", "beef", "chicken", "seafood"];

export default function ProductsSection({ products }: ProductsSectionProps) {
  const path = usePathname().split("/")[2];

  const filteredProducts = products.filter(
    (product) => product.collection.name.toLowerCase() === path
  );

  return (
    <section className="flex gap-4 flex-wrap">
      {!filteredProducts || filteredProducts.length === 0
        ? "There are no products as of this moment."
        : filteredProducts.map((product: Product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              collectionName={product.collection.name}
            />
          ))}
    </section>
  );
}
function usePathName() {
  throw new Error("Function not implemented.");
}

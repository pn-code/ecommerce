"use client";

import { usePathname } from "next/navigation";

import ProductCard from "@/components/products/ProductCard";

interface ProductsSectionProps {
  products: Product[];
}

export default function ProductsSection({ products }: ProductsSectionProps) {
  const path = usePathname().split("/")[2];

  const filteredProducts = !path
    ? products
    : products.filter(
        (product) => product.collection.name.toLowerCase() === path
      );

  return (
    <section className="w-full h-full flex gap-4 flex-wrap justify-center">
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

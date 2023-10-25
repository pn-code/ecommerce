import ProductsSection from "@/components/products/ProductsSection";
import { getProducts } from "@/helpers/products/getProducts";
import React from "react";

interface SearchProductsPageProps {
  params: {
    searchParam: string;
  };
}

export default async function SearchProductsPage({
  params,
}: SearchProductsPageProps) {
  const products = (await getProducts()) as Product[];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(params.searchParam.toLowerCase())
  );

  console.log(filteredProducts)

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg md:text-xl font-bold text-slate-800 flex justify-center md:justify-start">
        Search Results for {params.searchParam}
      </h2>

      <ProductsSection products={filteredProducts} search/>
    </div>
  );
}

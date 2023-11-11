import type { Metadata, ResolvingMetadata } from "next";

import ProductsSection from "@/components/products/ProductsSection";
import { getProducts } from "@/helpers/products/getProducts";

interface ProductPageProps {
  params: { product: string };
}

export async function generateMetadata(
  { params }: ProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `${params.product.toUpperCase()} COLLECTION | Uncle Ben's Meat Factory`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const products = (await getProducts()) as Product[];

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="md:pl-8 mt-2 text-lg md:text-xl font-bold text-slate-800 flex justify-center md:justify-start">
        {params.product.toUpperCase()} COLLECTION
      </h2>
      <ProductsSection products={products} />
    </div>
  );
}

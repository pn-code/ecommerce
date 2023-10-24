import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

import ProductDisplay from "@/components/products/ProductDisplay";
import { getProduct } from "@/helpers/products/getProduct";
import { currentUser } from "@clerk/nextjs";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export async function generateMetadata(
  { params }: ProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { productId } = params;

  const product = (await getProduct(Number(productId))) as Product;

  return {
    title: `${product.name} | Uncle Ben's Meat Factory`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = params;

  const product = (await getProduct(Number(productId))) as Product;
  const user = await currentUser();

  if (!product) {
    notFound();
  }

  return (
    <div>
      <ProductDisplay product={product} userId={user?.id} />
    </div>
  );
}

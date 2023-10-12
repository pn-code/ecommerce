import { notFound } from "next/navigation";

import ProductDisplay from "@/components/products/ProductDisplay";
import ProductReviewsDisplay from "@/components/products/ProductReviewsDisplay";
import { getProduct } from "@/helpers/products/getProduct";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = params;

  const product = (await getProduct(Number(productId))) as Product;

  if (!product) {
    notFound();
  }

  return (
    <div>
      {/* Product Display */}
      <ProductDisplay product={product} />

      {/* Reviews */}
      <ProductReviewsDisplay />
    </div>
  );
}

import { notFound } from "next/navigation";

import ProductDisplay from "@/components/products/ProductDisplay";
import { getProduct } from "@/helpers/products/getProduct";
import { currentUser } from "@clerk/nextjs";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = params;

  const product = (await getProduct(Number(productId))) as Product;
  const user = await currentUser();

  if (!product) {
    notFound();
  }
  console.log(user)

  return (
    <div>
      <ProductDisplay product={product} user={user}/>
    </div>
  );
}

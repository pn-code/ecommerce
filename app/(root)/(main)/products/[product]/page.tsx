import ProductsSection from "@/components/products/ProductsSection";
import { getProducts } from "@/helpers/products/getProducts";

export default async function ProductPage() {
  const products = (await getProducts()) as Product[];

  console.log(products)

  return (
    <div>
      <ProductsSection products={products} />
    </div>
  );
}

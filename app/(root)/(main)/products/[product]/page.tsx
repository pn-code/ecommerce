import ProductsSection from "@/components/products/ProductsSection";
import { getProducts } from "@/helpers/products/getProducts";

interface ProductPageProps {
  params: { product: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const products = (await getProducts()) as Product[];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg md:text-xl font-bold text-slate-800 flex justify-center">
        {params.product.toUpperCase()} COLLECTION
      </h2>
      <ProductsSection products={products} />
    </div>
  );
}

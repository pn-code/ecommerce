import ProductsSection from "@/components/products/ProductsSection";
import { getProducts } from "@/helpers/products/getProducts";

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

  const decodeSearchParams = (param: string) =>
    param.replaceAll("_", " ").toUpperCase();

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-lg md:text-xl font-bold text-slate-800 flex justify-center md:justify-start">
        Search Results for {decodeSearchParams(params.searchParam)}
      </h2>

      <div>
        <ProductsSection products={filteredProducts} search />
      </div>
    </div>
  );
}

import BillboardSlider from "@/components/billboard/BillboardSlider";
import ProductsSection from "@/components/products/ProductsSection";
import { getBillboards } from "@/helpers/billboards/getBillboards";
import { getProducts } from "@/helpers/products/getProducts";

export default async function Home() {
  const billboards = (await getBillboards()) as Billboard[];
  const products = (await getProducts()) as Product[];

  if (!billboards) throw new Error("Server could not load billboards.");
  if (!products) throw new Error("Server could not load products.");

  const showBillboards = billboards.filter(
    (billboard) => billboard.isShown === true
  );

  return (
    <div className="flex flex-col w-full h-full gap-8 md:gap-16">
      <BillboardSlider billboards={showBillboards} />

      <section className="w-full flex flex-col gap-4 md:gap-12 justify-center items-center">
        <header className="flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold md:text-xl">
            View Our Products
          </h2>
          <p className="text-sm text-slate-600">
            carefully curated by our team of meat professionals to ensure the
            best quality or your money back.
          </p>
        </header>

        <ProductsSection products={products} />
      </section>
    </div>
  );
}

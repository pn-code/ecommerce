import BillboardSlider from "@/components/billboard/BillboardSlider";
import { getBillboards } from "@/helpers/billboards/getBillboards";

export default async function Home() {
  const billboards = (await getBillboards()) as Billboard[];

  if (!billboards) throw new Error("Server could not load billboards.");

  const showBillboards = billboards.filter(
    (billboard) => billboard.isShown === true
  );

  return (
    <div className="flex flex-col w-full h-full">
      <BillboardSlider billboards={showBillboards} />
    </div>
  );
}

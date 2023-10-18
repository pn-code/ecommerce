import BillboardSlider from "@/components/billboard/BillboardSlider";
import { getBillboards } from "@/helpers/billboards/getBillboards";

export default async function Home() {
  const billboards = (await getBillboards()) as Billboard[];

  if (!billboards) throw new Error("Server could not load billboards.");

  return (
    <div className="flex flex-col w-full">
      <BillboardSlider billboards={billboards} />
    </div>
  );
}

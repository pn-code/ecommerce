import BillboardDisplay from "@/components/billboard/BillboardDisplay";
import { Button } from "@/components/ui/button";
import { getBillboards } from "@/helpers/billboards/getBillboards";
import Link from "next/link";
import React from "react";

export default async function AdminBillboardsPage() {
  const billboards = (await getBillboards()) as Billboard[];

  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Your Billboards</h2>

        <Button>
          <Link href="/admin/create/billboard">Create Billboard</Link>
        </Button>
      </header>

      <BillboardDisplay billboards={billboards} />
    </div>
  );
}

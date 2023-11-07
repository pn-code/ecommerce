import OrderList from "@/components/orders/admin/OrderList";
import { Button } from "@/components/ui/button";
import { getAllOrders } from "@/helpers/orders/getAllOrders";
import Link from "next/link";
import React from "react";

export default async function AdminOrdersPage() {
  const allOrders = await getAllOrders();

  if (!allOrders) throw new Error("Orders could not be loaded.");

  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">All Orders</h2>
      </header>

      <OrderList orders={allOrders} />
    </div>
  );
}

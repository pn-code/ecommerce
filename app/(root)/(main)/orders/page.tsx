import type { Metadata } from "next";

import OrderCard from "@/components/orders/OrderCard";
import { getOrders } from "@/helpers/orders/getOrders";

export const metadata: Metadata = {
  title: "Your Orders | Uncle Ben's Meat Factory ",
};

export default async function OrdersPage() {
  const orders = (await getOrders()) as any;

  return (
    <div className="w-full h-full flex flex-col gap-4 md:px-8 p-2">
      <header>
        <h2 className="font-semibold md:text-lg">Your Orders</h2>
      </header>

      {/* Orders Wrapper */}
      <section className="h-full w-full flex flex-col gap-2 md:flex-[3]">
        {orders.length === 0 ? (
          <p>No items found in cart.</p>
        ) : (
          orders.map((order: any) => <OrderCard key={order.id} order={order} />)
        )}
      </section>
    </div>
  );
}

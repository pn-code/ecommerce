import type { Metadata, ResolvingMetadata } from "next";

import { getOrder } from "@/helpers/orders/getOrder";
import { getSession } from "@/helpers/stripe/getSession";
import OrderDetails from "@/components/orders/admin/OrderDetails";
import OrderActions from "@/components/orders/admin/OrderActions";

interface AdminOrderPageProps {
  params: {
    orderId: string;
  };
}

// export async function generateMetadata(
//   { params }: AdminOrderPageProps,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const orderId = Number(params.orderId);
//   const order = (await getOrder(orderId)) as any;

//   return {
//     title: `Order #${order.id} - UBMF`,
//   };
// }

export default async function AdminOrderPage({ params }: AdminOrderPageProps) {
  const orderId = Number(params.orderId);
  const order = (await getOrder(orderId)) as any;

  if (!order) throw new Error("Order could not be loaded.");

  const session = await getSession(order.session_id!);

  if (!session) throw new Error("Session could not be loaded.");

  const CUSTOMER_DETAILS = session.customer_details;

  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          Order #{order.id} by {CUSTOMER_DETAILS.name}
        </h2>
      </header>

      <div className="flex flex-col gap-4">
        <OrderActions order={order} />
        <OrderDetails order={order} />
      </div>
    </div>
  );
}

import { prisma } from "@/lib/db";
import { stripe } from "@/lib/stripeClient";
import { currentUser } from "@clerk/nextjs";

export async function updateOrder(orderId: number) {
  try {
    const user = await currentUser();

    if (!user) throw new Error("No user found.");

    // Find orders not canceled or delivered
    const order = await prisma.order.findFirst({
      where: {
        user_id: user.id,
        id: orderId,
      },
    });

    const session = await stripe.checkout.sessions.retrieve(order?.session_id);

    const updatedOrder = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        payment_received: session.payment_status === "paid" ? true : false,
        delivery_address: `${session.shipping_details.address.line1}, ${
          session.shipping_details.address.line2
            ? session.shipping_details.address.line2
            : ""
        } ${session.shipping_details.address.city}, ${
          session.shipping_details.address.state
        } ${session.shipping_details.address.postal_code}`,
      },
    });

    return updatedOrder;
  } catch (error: any) {
    console.error("ORDERS/PUT: ", error.message);
  }
}

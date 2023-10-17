import { prisma } from "@/lib/db";
import { stripe } from "@/lib/stripeClient";
import { currentUser } from "@clerk/nextjs";

export async function cancelOrder(orderId: number) {
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

    const canceledOrder = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        delivery_status: "CANCELED"
      },
    });

    return canceledOrder;
  } catch (error: any) {
    console.error("ORDERS/UPDATE: ", error.message);
  }
}

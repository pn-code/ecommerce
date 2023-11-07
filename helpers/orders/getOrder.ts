import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { isCurrentUserAdmin } from "../isCurrentUserAdmin";

export async function getOrder(orderId: number) {
  try {
    const user = await currentUser();
    const admin = await isCurrentUserAdmin();

    if (!user) {
      throw new Error("Current user is unauthorized to get this order.");
    }

    if (user && !admin) {
      const order = await prisma.order.findFirst({
        where: {
          id: orderId,
          user_id: user.id,
        },
        include: {
          orderItems: {
            include: {
              product: true,
            },
          },
        },
      });

      return order;
    }

    if (admin) {
      const order = await prisma.order.findFirst({
        where: {
          id: orderId,
        },
        include: {
          orderItems: {
            include: {
              product: true,
            },
          },
        },
      });

      return order;
    }
  } catch (error: any) {
    console.error("ORDER/GET: ", error.message);
  }
}

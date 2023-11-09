import { prisma } from "@/lib/db";
import { isCurrentUserAdmin } from "../isCurrentUserAdmin";

export async function getAllOrders() {
  try {
    const admin = await isCurrentUserAdmin();

    if (!admin) {
      throw new Error("ALL ORDERS/GET: USER IS NOT ADMIN.");
    }

    const orders = await prisma.order.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });

    return orders;
  } catch (error: any) {
    console.error("ALL ORDERS/GET: ", error.message);
  }
}

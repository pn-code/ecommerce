import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function getOrders() {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const orders = await prisma.order.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });

    if (!orders) return [];

    return orders;
  } catch (error: any) {
    console.error("ORDERS/GET: ", error.message);
  }
}

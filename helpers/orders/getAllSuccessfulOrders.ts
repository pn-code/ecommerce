import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { isCurrentUserAdmin } from "../isCurrentUserAdmin";

export async function getAllSuccessfulOrders() {
    try {
        const admin = await isCurrentUserAdmin();

        if (!admin) {
            return NextResponse.json("Unauthorized", { status: 401 });
        }

        const orders = await prisma.order.findMany({
            where: {
                NOT: {
                    delivery_status: "CANCELED",
                },
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

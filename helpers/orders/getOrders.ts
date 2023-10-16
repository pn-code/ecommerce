import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

export async function getOrders() {
    try {
        const user = await currentUser();

        if (!user) {
            throw new Error("No user found.");
        }

        const orders = await prisma.order.findMany({
            where: {
                user_id: user.id,
            },
        });

        if (!orders) return [];

        return orders;
    } catch (error: any) {
        console.error("ORDERS/GET: ", error.message);
    }
}

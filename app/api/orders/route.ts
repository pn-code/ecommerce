import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const user = await currentUser();

        if (!user) {
            return NextResponse.json("Unauthorized", { status: 401 });
        }

        const carts = await prisma.cart.findMany({
            where: {
                user_id: user.id,
            },
        });

        if (!carts) {
            return NextResponse.json("Bad request", { status: 400 });
        }

        const modifiedCarts = carts.map((cart) => ({
            product_id: cart.product_id,
            quantity: cart.quantity,
            price: cart.total_price,
        }));

        const cartTotal = carts.reduce(
            (total, cart) => total + cart.total_price,
            0
        );

        // Create our order with our total price
        const order = await prisma.order.create({
            data: {
                user_id: user.id,
                total_amount: cartTotal,
                orderItems: {
                    create: modifiedCarts,
                },
            },
            include: {
                orderItems: true,
            },
        });

        return NextResponse.json(order, { status: 201 });
    } catch (error: any) {
        console.error("ORDERS/POST: ", error.message);
        return NextResponse.json("SERVER ERROR", { status: 500 });
    }
}

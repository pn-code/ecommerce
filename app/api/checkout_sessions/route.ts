import { NextRequest, NextResponse } from "next/server";

import { createLineItems } from "@/helpers/carts/createLineItems";
import { stripe } from "@/lib/stripeClient";
import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const user = await currentUser();

        if (!user) {
            return NextResponse.json("Unauthorized", { status: 401 });
        }

        const data = await req.json();

        const carts = data.carts as CartItem[];
        const orderId = data.orderId;

        const lineItems = createLineItems(carts);

        const HOST_URL = process.env.HOST_URL;

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            client_reference_id: orderId,
            line_items: lineItems,
            mode: "payment",
            success_url: `${HOST_URL}/orders/?success=true`,
            cancel_url: `${HOST_URL}/orders/?canceled=true`,
            shipping_address_collection: {
                allowed_countries: ["US"],
            },
        });

        const updateOrderWithSessionId = await prisma.order.update({
            where: {
                id: orderId,
                user_id: user.id,
            },
            data: {
                session_id: session.id
            },
        });

        console.log(updateOrderWithSessionId)

        return NextResponse.json(session, { status: 201 });
    } catch (error: any) {
        return NextResponse.json("CHECKOUT_SESSIONS/POST: ", error.message);
    }
}

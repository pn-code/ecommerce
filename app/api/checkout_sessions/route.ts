import { NextRequest, NextResponse } from "next/server";

import { createLineItems } from "@/helpers/carts/createLineItems";
import { stripe } from "@/lib/stripeClient";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
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

        return NextResponse.json(session, { status: 201 });
    } catch (error: any) {
        return NextResponse.json("CHECKOUT_SESSIONS/POST: ", error.message);
    }
}

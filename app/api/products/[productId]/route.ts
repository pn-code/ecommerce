import { isCurrentUserAdmin } from "@/helpers/isCurrentUserAdmin";
import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
    req: NextRequest,
    { params }: { params: { productId: string } }
) {
    try {
        const admin = isCurrentUserAdmin();

        if (!admin) {
            return NextResponse.json("Unauthorized", { status: 401 });
        }

        const productId = Number(params.productId);

        const deletedProduct = await prisma.product.delete({
            where: {
                id: productId,
            },
        });

        return NextResponse.json(deletedProduct, { status: 200 });
    } catch (error: any) {
        console.error("PRODUCTS/DELETE: ", error.message);
        return NextResponse.json("SERVER ERROR", { status: 500 });
    }
}

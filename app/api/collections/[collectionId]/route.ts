import { isCurrentUserAdmin } from "@/helpers/isCurrentUserAdmin";
import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
    req: NextRequest,
    { params }: { params: { collectionId: string } }
) {
    try {
        const admin = isCurrentUserAdmin();

        if (!admin) {
            return NextResponse.json("Unauthorized", { status: 401 });
        }

        const collectionId = Number(params.collectionId);

        const collectionInQuestion = await prisma.collection.findFirst({
            where: {
                id: collectionId,
            },
            include: {
                products: true,
            },
        });

        if (!collectionInQuestion) {
            return NextResponse.json("Could not find collection", {
                status: 400,
            });
        }

        if (collectionInQuestion.products.length > 0) {
            return NextResponse.json("Products still exist on the collection", {
                status: 403,
            });
        }

        const deletedCollection = await prisma.collection.delete({
            where: {
                id: collectionId,
            },
        });

        return NextResponse.json(deletedCollection, { status: 200 });
    } catch (error: any) {
        console.error("COLLECTIONS/DELETE: ", error.message);
        return NextResponse.json("SERVER ERROR", { status: 500 });
    }
}

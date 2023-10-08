import { prisma } from "@/lib/db";
import { CollectionSchema } from "@/schemas/CollectionSchema";
import { currentUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: NextRequest) {
    try {
        // Check for user and that user is our defined admin
        const user = await currentUser();
        const adminId = process.env.ADMIN_USER_ID;

        if (!user || user.id !== adminId) {
            return NextResponse.json(
                { success: false, message: "Unauthorized" },
                { status: 401 }
            );
        }

        // Validate the received data
        const data = await req.json();
        CollectionSchema.parse(data);

        // Create collection
        const collection = await prisma.collection.create({
            data: {
                name: data.name,
            },
        });

        return NextResponse.json(collection, { status: 201 });
    } catch (error: any) {
        if (typeof ZodError) {
            console.error(error);
            return NextResponse.json("USER ERROR", { status: 400 });
        } else {
            console.error("COLLECTIONS POST:", error.message);
            return NextResponse.json("SERVER ERROR", { status: 500 });
        }
    }
}

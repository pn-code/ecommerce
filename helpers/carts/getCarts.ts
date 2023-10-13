import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

export async function getCarts() {
  try {
    const user = await currentUser();

    if (!user) throw new Error("Could not find user.");

    const carts = await prisma.cart.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        product: {
          select: {
            name: true,
            imageUrl: true,
          },
        },
      },
    });

    return carts;
  } catch (error: any) {
    console.error(error.message);
  }
}

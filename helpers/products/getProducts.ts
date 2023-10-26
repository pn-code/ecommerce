import { prisma } from "@/lib/db";

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      include: { collection: { select: { name: true } } },
      orderBy: {
        collectionId: "asc"
      }
    });
    return products;
  } catch (error: any) {
    console.error("PRODUCTS/GET: ", error.message);
  }
}

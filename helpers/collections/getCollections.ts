import { prisma } from "@/lib/db";

export async function getCollections() {
  try {
    const collections = await prisma.collection.findMany({
      include: {
        products: true,
      },
    });

    return collections;
  } catch (error: any) {
    console.error("COLLECTIONS/GET:", error.message);
  }
}

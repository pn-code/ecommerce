import { prisma } from "@/lib/db";

export async function getCollection(collectionId: number) {
  try {
    const collection = await prisma.collection.findFirst({
      where: {
        id: collectionId,
      },
      include: {
        products: true,
      },
    });

    return collection;
  } catch (error: any) {
    console.error("COLLECTION/GET:", error.message);
  }
}

import { prisma } from "@/lib/db";

export async function getProduct(id: number) {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: id,
      },
    });
    return product;
  } catch (error: any) {
    console.error("PRODUCT/GET: ", error.message);
  }
}

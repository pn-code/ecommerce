import { prisma } from "@/lib/db";

export async function getProducts() {
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error: any) {
    console.error(error.message);
  }
}

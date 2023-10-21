import { prisma } from "@/lib/db";

export async function getBillboards() {
  try {
    const billboards = await prisma.billboard.findMany({
      orderBy: {
        order: "asc",
      },
    });

    return billboards;
  } catch (error: any) {
    console.error("BILLBOARDS/GET: ", error.message);
  }
}

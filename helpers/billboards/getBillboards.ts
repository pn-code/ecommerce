import { prisma } from "@/lib/db";
import { isCurrentUserAdmin } from "../isCurrentUserAdmin";

export async function getBillboards() {
  try {
    const admin = await isCurrentUserAdmin();

    if (!admin) return false;

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

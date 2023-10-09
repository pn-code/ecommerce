import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function isCurrentUserAdmin() {
  const user = await currentUser();
  const adminId = process.env.ADMIN_USER_ID;

  if (!user || user.id !== adminId) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  return user;
}

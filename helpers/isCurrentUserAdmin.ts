import { currentUser } from "@clerk/nextjs";

export async function isCurrentUserAdmin() {
  const user = await currentUser();
  const adminId = process.env.ADMIN_USER_ID;

  if (!user || user.id !== adminId) {
    return false;
  }

  return user;
}

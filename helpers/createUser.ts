import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

export async function createUser() {
  try {
    const user = await currentUser();

    if (!user) throw new Error("User is not signed in.");

    const userInDb = await prisma.user.findFirst({
      where: {
        id: user.id,
      },
    });

    if (!userInDb) {
      const newUser = await prisma.user.create({
        data: {
          id: user.id,
          fullName: `${user.firstName! + user.lastName!}`,
          email: user.emailAddresses[0].emailAddress,
        },
      });

      return newUser;
    }

    return userInDb;
  } catch (error: any) {
    console.error("USERS/POST: ", error.message);
  }
}

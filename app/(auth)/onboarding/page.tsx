import { createUser } from "@/helpers/createUser";
import { redirect } from "next/navigation";

export default async function OnboardingPage() {
  const user = await createUser();

  if (!user) return redirect("/sign-up");
  redirect("/");
}

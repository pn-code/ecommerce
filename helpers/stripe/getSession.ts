import { stripe } from "@/lib/stripeClient";

export const getSession = async (sessionId: string) =>
  await stripe.checkout.sessions.retrieve(sessionId);

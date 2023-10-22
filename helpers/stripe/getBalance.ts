import { stripe } from "@/lib/stripeClient";

export const getBalance = async () => await stripe.balance.retrieve();

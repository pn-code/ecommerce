import { stripe } from "@/lib/stripeClient";

export async function getStripeProduct(productId: number | string) {
  const product = await stripe.products.retrieve(String(productId));

  return product;
}

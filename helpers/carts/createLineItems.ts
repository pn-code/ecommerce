export function createLineItems(cartItems: CartItem[]) {
  const lineItems = cartItems.map((cartItem) => ({
    price: cartItem.price_id,
    quantity: cartItem.quantity,
  }));

  return lineItems;
}

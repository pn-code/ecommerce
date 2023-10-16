interface Collection {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  collectionId: number;
  collection: { name: string };
}

interface CartItem {
  id: number;
  user_id: string;
  product_id: number;
  quantity: number;
  unit_price: number;
  total_price: number;
  created_at: Date;
  price_id: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

interface Order {
  id: number;
  user_id: string;
  session_id: string;
  created_at: Date;
  total_amount: number;
  payment_received: boolean;
  delivery_address: null | string;
  delivery_status: "PROCESSING" | "SHIPPING" | "DELIVERED";
  delivered_at: null | Date;
  orderItems: OrderItem[]
}

interface OrderItem {
    id: number,
    order_id: number,
    product_id: number,
    quantity: number,
    price: number,
    product: Product[]
}
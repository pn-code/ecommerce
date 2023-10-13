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
  product: {
    name: string;
    imageUrl: string;
  };
}

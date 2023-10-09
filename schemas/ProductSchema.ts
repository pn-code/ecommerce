import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(1, "Price is required"),
  collectionId: z.number().min(0, "Collection ID is required"),
  imageUrl: z.string().min(1, "Image is required"),
});

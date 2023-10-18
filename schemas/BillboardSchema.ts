import { z } from "zod";

export const BillboardSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  link: z.string().min(1),
  isShown: z.boolean(),
  imageUrl: z.string().min(1),
});
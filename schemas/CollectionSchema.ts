import { z } from "zod";

export const CollectionSchema = z.object({
    name: z.string().min(1, "Collection name is required.")
});

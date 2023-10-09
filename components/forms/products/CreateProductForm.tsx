"use client";

import Image from "next/image";

import { UploadDropzone } from "@/utils/uploadthing";
import toast from "react-hot-toast";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ZodError } from "zod";
import { ProductSchema } from "@/schemas/ProductSchema";

interface CreateProductFormProps {
  collections: Collection[];
}

const defaultImageUrl =
  "https://utfs.io/f/9b42aa31-a51d-4ec4-88b0-29bbe8e8e3cf-3fzxb5.png";

export default function CreateProductForm({
  collections,
}: CreateProductFormProps) {
  const [imageUrl, setImageUrl] = useState<string>(defaultImageUrl);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [collectionId, setCollectionId] = useState("");

  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const createProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const product = { name, description, price, collectionId, imageUrl };

      // If false, it will throw an error and get caught in catch block
      ProductSchema.parse(product);

      console.log(product);

      const res = await axios.post("/api/products", product);

      if (res.status === 201) {
        toast.success(`${product.name} product has been created!`);
        router.push("/admin/dashboard");
      }
    } catch (error: any) {
      if (error instanceof ZodError) {
        console.log(error.message)
        const errorJSON = JSON.parse(error.message);
        toast.error(errorJSON[0].message);
      } else {
        console.error(error.message);
        toast.error("We've run into an issue. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleImageUploadComplete = async (req: any) => {
    setImageUrl(req[0].url);
    toast.success("Successfully uploaded image");
  };

  const handleImageUploadFailed = async () => {
    toast.error("Image upload has failed. Please try again later.");
  };

  console.log(collectionId)
  return (
    <form onSubmit={createProduct} className="flex flex-col gap-4">
      <div className="w-full flex flex-col gap-4">
        <label htmlFor="image">Product Image: </label>
        <UploadDropzone
          className="h-52"
          endpoint={"imageUploader"}
          onClientUploadComplete={handleImageUploadComplete}
          onUploadError={handleImageUploadFailed}
        />

        <div className="w-full flex justify-center">
          {imageUrl != defaultImageUrl ? (
            <Image
              src={imageUrl}
              alt="Uploaded Image"
              height={120}
              width={120}
            />
          ) : (
            ""
          )}
        </div>
      </div>

      <div>
        <label htmlFor="name">Name: </label>
        <Input
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Product Name"
        />
      </div>

      <div>
        <label htmlFor="description">Description: </label>
        <Textarea
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Enter new product description here."
        />
      </div>

      <div>
        <label htmlFor="price">Price: </label>
        <Input
          id="price"
          type="number"
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="i.e. 2000 for $20.00"
        />
      </div>

      <div>
        <label htmlFor="description">Collection: </label>
        <Select
          onValueChange={(value: string) => setCollectionId(Number(value))}
        >
          <SelectTrigger className="w-[240px]">
            <SelectValue placeholder="Select Collection" />
          </SelectTrigger>
          <SelectContent>
            {collections.map((collection) => (
              <SelectItem key={collection.id} value={String(collection.id)}>
                {collection.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-2 justify-end">
        <Button variant="ghost">
          <Link href="/admin/dashboard">Cancel</Link>
        </Button>
        <Button
          className="disabled:bg-slate-600 disabled:cursor-wait"
          type="submit"
          disabled={loading}
        >
          Create
        </Button>
      </div>
    </form>
  );
}

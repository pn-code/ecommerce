"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { ZodError } from "zod";

const defaultImageUrl=""

export default function CreateBillboardForm() {
    const [imageUrl, setImageUrl] = useState<string>(defaultImageUrl);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>();
    const [collectionId, setCollectionId] = useState<number | null>();
  
    const [loading, setLoading] = useState<boolean>(false);
  
    const router = useRouter();
  
    const createBillboard = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      try {
        setLoading(true);
  
        const product = { name, description, price, collectionId, imageUrl };
  
        // If false, it will throw an error and get caught in catch block
        // ProductSchema.parse(product);
  
        const res = await axios.post("/api/products", product);
  
        if (res.status === 201) {
        //   toast.success(`${billboard.name} product has been created!`);
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
    return <form>CreateBillboardForm</form>;
}

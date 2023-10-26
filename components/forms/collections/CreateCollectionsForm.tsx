"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { ZodError } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CollectionSchema } from "@/schemas/CollectionSchema";
import { useRouter } from "next/navigation";

export default function CreateCollectionsForm() {
  const [collectionName, setCollectionName] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const createCollection = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const collection = { name: collectionName };

      // If false, it will throw an error and get caught in catch block
      CollectionSchema.parse(collection);

      const res = await axios.post("/api/collections", collection);

      if (res.status === 201) {
        toast.success(`${collection.name} collection has been created!`);
        router.push("/admin/collections");
        router.refresh();
      }
    } catch (error: any) {
      if (error instanceof ZodError) {
        const errorJSON = JSON.parse(error.message);
        toast.error(errorJSON[0].message);
      } else {
        console.error("COLLECTIONS/POST: ", error.message);
        toast.error("We've run into an issue. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={(e) => createCollection(e)} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name">Name:</label>
        <Input
          disabled={loading}
          onChange={(e) => setCollectionName(e.target.value)}
          id="name"
          className="w-52"
          value={collectionName}
        />
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

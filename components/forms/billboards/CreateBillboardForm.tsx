"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { ZodError } from "zod";
import { BillboardSchema } from "@/schemas/BillboardSchema";
import { cn } from "@/lib/utils";
import "@uploadthing/react/styles.css";

const defaultImageUrl = "";

export default function CreateBillboardForm() {
  const [imageUrl, setImageUrl] = useState<string>(defaultImageUrl);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [link, setLink] = useState<string>("/");
  const [isShown, setIsShown] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const createBillboard = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const billboard = { title, description, link, isShown, imageUrl };

      console.log(billboard);

      // If false, it will throw an error and get caught in catch block
      BillboardSchema.parse(billboard);

      const res = await axios.post("/api/billboards", billboard);

      if (res.status === 201) {
        toast.success(`${billboard.title} product has been created!`);
        router.push("/admin/billboards");
      }
    } catch (error: any) {
      if (error instanceof ZodError) {
        console.log(error.message);
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

  return (
    <form onSubmit={createBillboard} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="font-semibold" htmlFor="imageUrl">
          Background Image:{" "}
        </label>
        <span className="text-xs text-slate-600">
          Background image of the billboard which sit behind the text and
          banner.
        </span>
        <div
          className={cn(
            "relative w-full flex justify-center",
            imageUrl != defaultImageUrl && "h-[300px]"
          )}
        >
          {imageUrl != defaultImageUrl ? (
            <Image
              className="object-cover"
              src={imageUrl}
              alt="Uploaded Image"
              fill
            />
          ) : (
            ""
          )}
        </div>
        <UploadDropzone
          className="h-52"
          onClientUploadComplete={handleImageUploadComplete}
          onUploadError={handleImageUploadFailed}
          endpoint={"imageUploader"}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold" htmlFor="title">
          Title:{" "}
        </label>
        <span className="text-xs text-slate-600">
          Concise and descriptive title which showcases the billboard.
        </span>
        <Input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Billboard Title"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold" htmlFor="description">
          Description:{" "}
        </label>
        <span className="text-xs text-slate-600">
          This description accompanies the title and link button on the
          billboard.
        </span>
        <Textarea
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Enter billboard description here..."
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold" htmlFor="link">
          Link:{" "}
        </label>
        <span className="text-xs text-slate-600">
          Used to redirect users to appropriate page. For specific products
          enter /products/product/&apos;productId&apos;. For a featured
          collection enter /products/&apos;collectionName&apos;
        </span>
        <Input
          id="link"
          onChange={(e) => setLink(e.target.value)}
          value={link}
          placeholder="Billboard Link"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold" htmlFor="show_billboard">
          Show Billboard:{" "}
        </label>
        <span className="text-xs text-slate-600">
          Show this billboard on the home page directly after its creation.
        </span>

        <div className="flex gap-4">
          <div className="flex gap-1 items-center">
            <Input
              onClick={() => setIsShown(true)}
              id="show_true"
              name="show_billboard"
              type="radio"
              value={1}
            />
            <label htmlFor="show_true">True</label>
          </div>

          <div className="flex gap-1 items-center">
            <Input
              defaultChecked
              onClick={() => setIsShown(false)}
              id="show_false"
              name="show_billboard"
              type="radio"
              value={0}
            />
            <label htmlFor="show_false">False</label>
          </div>
        </div>
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

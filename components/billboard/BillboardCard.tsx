"use client";

import { cn } from "@/lib/utils";
import { BillboardSchema } from "@/schemas/BillboardSchema";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

interface BillboardCardProps {
  billboard: Billboard;
}

export default function BillboardCard({ billboard }: BillboardCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const [newTitle, setNewTitle] = useState(billboard.title);
  const [newDescription, setNewDescription] = useState(billboard.description);
  const [newOrder, setNewOrder] = useState(billboard.order);
  const [newLink, setNewLink] = useState(billboard.link);
  const [newIsShown, setNewIsShown] = useState<boolean>(billboard.isShown);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const updateBillboard = async () => {
    try {
      setLoading(true);

      const updatedBillboard = {
        id: billboard.id,
        title: newTitle,
        description: newDescription,
        order: newOrder,
        link: newLink,
        isShown: newIsShown,
        imageUrl: billboard.imageUrl,
      } as Billboard;

      BillboardSchema.parse(updatedBillboard);

      const res = await axios.put(`/api/billboards`, updatedBillboard);

      if (res.status === 200) {
        toast.success(`Successfully updated ${updatedBillboard.title}!`);
        setIsEditing(false);
        router.refresh();
      }
    } catch (error: any) {
      if (error.response.status === 409) {
        console.error("BILLBOARD/PUT: ", error.message);
        toast.error(
          "Please make sure updated order number does not conflict with existing numbers."
        );
      } else {
        console.error("BILLBOARD/PUT: ", error.message);
        toast.error("Ran into an error, please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <div className="flex w-full flex-col md:flex-row justify-center md:justify-start md:items-center">
        <div className="flex justify-center items-center">
          <div className="w-full h-52 md:w-36 md:h-36 relative">
            <Image
              className="p-4 object-scale-down"
              src={billboard.imageUrl}
              alt={billboard.title}
              fill
            />
          </div>
        </div>

        <CardContent className="flex flex-col gap-2 w-full py-4">
          <CardTitle className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="flex flex-col gap-1">
                {isEditing === true ? (
                  <div className="flex flex-col gap-1">
                    <label htmlFor="title">Title:</label>
                    <Input
                      id="title"
                      onChange={(e) => setNewTitle(e.target.value)}
                      value={newTitle}
                      className="font-normal"
                      aria-label="title"
                      placeholder="New Title"
                    />
                  </div>
                ) : (
                  <h3>{billboard.title}</h3>
                )}
              </div>
              <div className="flex flex-col gap-1">
                {isEditing === true ? (
                  <div className="flex flex-col gap-1">
                    <label htmlFor="order">Order Number: </label>
                    <Input
                      id="order"
                      onChange={(e) => setNewOrder(Number(e.target.value))}
                      type="number"
                      value={newOrder}
                      className="font-normal w-14"
                      aria-label="order number"
                      placeholder="ie. 1"
                    />
                  </div>
                ) : (
                  <p className="text-xs text-slate-600">
                    Order #{billboard.order}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex flex-col gap-1">
                {isEditing === true ? (
                  <div className="flex flex-col gap-1">
                    <label htmlFor="link">Link: </label>
                    <Input
                      id="link"
                      onChange={(e) => setNewLink(e.target.value)}
                      value={newLink}
                      className="font-normal"
                      aria-label="link"
                      placeholder="new link url"
                    />
                  </div>
                ) : (
                  <span>{billboard.link}</span>
                )}
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button
                    className="p-1 rounded-full h-6 w-6"
                    variant="outline"
                  >
                    <TriangleDownIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Billboard Changes</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => setIsEditing((prev) => !prev)}
                  >
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardTitle>

          <CardDescription className="h-full w-full flex justify-between">
            <div className="w-full flex flex-col gap-1">
              {isEditing === true ? (
                <div className="flex flex-col gap-1">
                  <label
                    className="text-[15px] font-semibold text-black"
                    htmlFor="description"
                  >
                    Description:{" "}
                  </label>
                  <Textarea
                    id="description"
                    className="max-w-[900px]"
                    onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription}
                    aria-label="billboard description"
                    placeholder="Enter new billboard description here..."
                  />
                </div>
              ) : (
                <p className="max-w-[900px]">{billboard.description}</p>
              )}
            </div>

            <div className="min-w-[90px] flex flex-col gap-1 justify-end">
              <div
                className={cn(
                  "text-xs text-slate-600 font-semibold flex flex-col items-end",
                  billboard.isShown ? "text-blue-500" : "text-red-600"
                )}
              >
                {isEditing === true ? (
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-[15px] font-semibold text-black"
                      htmlFor="show"
                    >
                      Is Shown:{" "}
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setNewIsShown(() => (value === "true" ? true : false))
                      }
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Show Billboard" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Is Shown:</SelectLabel>
                          <SelectItem value="true">TRUE</SelectItem>
                          <SelectItem value="false">FALSE</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                ) : (
                  <p className="w-24">
                    is shown: {billboard.isShown ? "TRUE" : "FALSE"}
                  </p>
                )}
              </div>
            </div>
          </CardDescription>
        </CardContent>
      </div>
      {isEditing && (
        <div className="flex justify-end my-4 gap-2 pr-2">
          <Button
            type="button"
            onClick={() => setIsEditing(false)}
            variant="outline"
          >
            Cancel
          </Button>
          <Button
            disabled={loading}
            onClick={updateBillboard}
            className="bg-green-500 hover:bg-green-600"
          >
            Update
          </Button>
        </div>
      )}
    </Card>
  );
}

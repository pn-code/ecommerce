"use client";

import { cn } from "@/lib/utils";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";
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

  console.log(isEditing);

  const [newTitle, setNewTitle] = useState(billboard.title);
  const [newDescription, setNewDescription] = useState(billboard.description);
  const [newOrder, setNewOrder] = useState(billboard.order);
  const [newLink, setNewLink] = useState(billboard.link);
  const [newIsShown, setNewIsShown] = useState<boolean>(billboard.isShown);

  return (
    <Card onDrag={() => {}} className="flex w-full flex-col md:flex-row">
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
                <Input
                  onChange={(e) => setNewTitle(e.target.value)}
                  value={newTitle}
                  className="font-normal"
                  aria-label="title"
                  placeholder="New Title"
                />
              ) : (
                <h3>{billboard.title}</h3>
              )}
            </div>
            <div className="flex flex-col gap-1">
              {isEditing === true ? (
                <Input
                  onChange={(e) => setNewOrder(Number(e.target.value))}
                  type="number"
                  value={newOrder}
                  className="font-normal w-14"
                  aria-label="order number"
                  placeholder="ie. 1"
                />
              ) : (
                <p className="text-xs text-slate-600">
                  Order #{billboard.order}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-1">
              {isEditing === true ? (
                <Input
                  onChange={(e) => setNewLink(e.target.value)}
                  value={newLink}
                  className="font-normal"
                  aria-label="link"
                  placeholder="new link url"
                />
              ) : (
                <span>{billboard.link}</span>
              )}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className="p-1 rounded-full h-6 w-6" variant="outline">
                  <TriangleDownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Billboard Changes</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIsEditing((prev) => !prev)}>
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
              <Textarea
                className="w-full max-w-[1200px]"
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                aria-label="billboard description"
                placeholder="Enter new billboard description here..."
              />
            ) : (
              <p className="max-w-[1200px]">{billboard.description}</p>
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
                <Select
                  defaultValue={billboard.isShown ? "true" : "false"}
                  onValueChange={(value) => setNewIsShown(Boolean(value))}
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
              ) : (
                <p className="w-full">is shown: {billboard.isShown ? "TRUE" : "FALSE"}</p>
              )}
            </div>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}

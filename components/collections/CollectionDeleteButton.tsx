"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface CollectionDeleteButtonProps {
    collection: Collection;
}

export default function CollectionDeleteButton({
    collection,
}: CollectionDeleteButtonProps) {
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const deleteCollection = async (collectionId: number) => {
        try {
            setLoading(true);

            const res = await axios.delete(`/api/collections/${collectionId}`);

            if (res.status === 200) {
                toast.success(
                    `${collection.name} Collection has been deleted.`
                );
                router.push("/admin/collections");
                router.refresh();
            }
        } catch (error: any) {
            console.error("COLLECTION/DELETE: ", error.message);
            toast.error("An error has occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            disabled={loading}
            type="button"
            onClick={() => deleteCollection(collection.id)}
            className="bg-red-400 hover:bg-red-500"
            variant="destructive"
        >
            Delete Collection
        </Button>
    );
}

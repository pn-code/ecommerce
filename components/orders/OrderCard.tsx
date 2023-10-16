import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function OrderCard() {
    return (
        <Card className="flex w-full flex-col md:flex-row md:items-center">
            <CardHeader className="flex flex-col gap-1 w-full">
                <CardTitle className="flex justify-between gap-4">
                Hellow
                </CardTitle>
                <CardDescription className="flex justify-between items-center">

                </CardDescription>
            </CardHeader>
        </Card>
    );
}

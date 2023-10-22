import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllSuccessfulOrders } from "@/helpers/orders/getAllSuccessfulOrders";
import { getBalance } from "@/helpers/stripe/getBalance";
import { CaretUpIcon } from "@radix-ui/react-icons";

export default async function DashboardPage() {
    const balance = await getBalance();
    const successfulOrders = (await getAllSuccessfulOrders()) as any;

    const totalRevenue = successfulOrders.reduce(
        (total: any, order: any) => total + order.total_amount,
        0
    );

    return (
        <div>
            <header className="flex justify-between mb-2">
                <h2 className="text-lg font-semibold">Dashboard</h2>
            </header>

            <div className="bg-slate-100 p-1.5 rounded-md flex gap-1.5 w-fit mb-4">
                <Button>Overview</Button>
                <Button className="hover:underline" variant="ghost">Analytics</Button>
                <Button className="hover:underline" variant="ghost">Reports</Button>
                <Button className="hover:underline" variant="ghost">Notifications</Button>
            </div>

            <section className="flex flex-col md:flex-row gap-4">
                <Card className="w-full md:w-[300px]">
                    <CardHeader>
                        <CardTitle className="flex justify-between">
                            <h2 className="font-[500]">Total Revenue</h2>
                            <span>$</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h3 className="text-xl font-semibold">
                            ${totalRevenue * 0.01}.00
                        </h3>
                    </CardContent>
                </Card>

                <Card className="w-full md:w-[300px]">
                    <CardHeader>
                        <CardTitle className="flex justify-between">
                            <h2 className="font-[500]">
                                Total Non-Canceled Orders
                            </h2>
                            <span>
                                <CaretUpIcon />
                            </span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h3 className="text-xl font-semibold">
                            {successfulOrders.length}
                        </h3>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}

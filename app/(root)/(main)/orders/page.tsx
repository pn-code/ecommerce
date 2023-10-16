import OrderCard from "@/components/orders/OrderCard";
import { getOrders } from "@/helpers/orders/getOrders";

export default async function OrdersPage() {
    const orders = (await getOrders()) as any;

    return (
        <div className="w-full h-full flex flex-col gap-4">
            <header>
                <h2 className="font-semibold md:text-lg">Your Orders</h2>
            </header>

            {/* Orders Wrapper */}
            <section className="h-full w-full flex flex-col gap-2 md:flex-[3]">
                {orders.length === 0 ? (
                    <p>No items found in cart.</p>
                ) : (
                    orders.map((order: any) => (
                        <OrderCard key={orders.id} />
                    ))
                )}
            </section>
        </div>
    );
}

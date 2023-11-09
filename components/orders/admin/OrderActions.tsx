import { cn } from "@/lib/utils";

interface OrderActionsProps {
  order: Order;
}

type OrderStatus = "PROCESSING" | "SHIPPING" | "DELIVERED" | "CANCELLED";

const ORDER_STATUSES = ["PROCESSING", "SHIPPING", "DELIVERED", "CANCELLED"];
const ORDER_STATUSES_MAP = {
  PROCESSING: 0,
  SHIPPING: 1,
  DELIVERED: 2,
  CANCELLED: 3,
};

export default function OrderActions({ order }: OrderActionsProps) {
  const currentStatusIndex = ORDER_STATUSES_MAP[order.delivery_status];

  const generateListStyles = (status: OrderStatus) => {
    const statusIndex = ORDER_STATUSES_MAP[status];

    if (currentStatusIndex > statusIndex) {
      return "border-emerald-600 text-emerald-600";
    }

    if (currentStatusIndex < statusIndex) {
      return "border-slate-400 text-slate-400 bg-gray-200";
    }

    if (currentStatusIndex === statusIndex) {
      return "animate-pulse text-blue-900 border-blue-900";
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <header>
        <h2 className="font-semibold">Order Status</h2>
      </header>

      <ul className="flex flex-col md:flex-row gap-2">
        {ORDER_STATUSES.map((status) => (
          <li
            className={cn("border-2 p-2 w-full md:w-36", generateListStyles(status as OrderStatus))}
            key={status}
          >
            {status}
          </li>
        ))}
      </ul>
    </div>
  );
}

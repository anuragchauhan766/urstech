import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ProductTable } from "@/components/dashboard/ProductTable";
import { RevenueStats } from "@/components/dashboard/RevenueStats";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { StatCard, StatsCardProps } from "@/components/dashboard/StatsCard";
import { CircleDollarSign, Package, ReceiptText, UsersRound } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "E-commerce dashboard",
};
const statsData: StatsCardProps[] = [
  {
    title: "Sales Today",
    stats: "$120",
    description: <p className="text-sm">*updated every order success</p>,
    icon: <Package className="h-6 w-6" />,
    className: "bg-primary text-white",
  },
  {
    title: "Total Earning",
    stats: "$181,020",
    description: (
      <p>
        <span className="text-green-500">+8.20%</span>More earning than usual
      </p>
    ),
    icon: <CircleDollarSign className="h-6 w-6" />,
  },
  {
    title: "Total Orders",
    stats: "102",
    description: (
      <p>
        <span className="text-green-500">+2.18%</span>More orders than usual
      </p>
    ),
    icon: <ReceiptText className="h-6 w-6" />,
  },
  {
    title: "Visitor Today",
    stats: "$81,020",
    description: (
      <p>
        <span className="text-green-500">+2.18%</span>More Visitor than usual
      </p>
    ),
    icon: <UsersRound className="h-6 w-6" />,
  },
];

export default function Page() {
  return (
    <>
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-y-scroll">
        <DashboardHeader />
        <main className="flex-1 space-y-6 p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <RevenueStats />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {statsData.map((data) => (
                <StatCard key={data.title} {...data} />
              ))}
            </div>
          </div>
          <ProductTable />
        </main>
      </div>
    </>
  );
}

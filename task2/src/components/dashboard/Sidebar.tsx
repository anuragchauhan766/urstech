"use client";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  ChartColumnStacked,
  ChevronDown,
  ChevronUp,
  Crown,
  LogOut,
  Package,
  Settings,
  ShoppingCart,
  Store,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const navItems = [
  { name: "Home", icon: Store, href: "/dashboard" },
  { name: "Sales", icon: ShoppingCart, href: "/dashboard/sales" },
  {
    name: "Products",
    icon: Package,
    href: "/dashboard/products",
    children: [
      { name: "Show All", count: 0 },
      { name: "T-Shirts", count: 108 },
      { name: "Jackets", count: 42 },
      { name: "Pants", count: 26 },
      { name: "Shoes", count: 42 },
    ],
  },
  { name: "Reports", icon: ChartColumnStacked, href: "/dashboard/reports" },
  { name: "Customers", icon: Users, href: "/dashboard/customers" },
];

export function Sidebar() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (label: string) => {
    setOpenItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]));
  };
  return (
    <aside className="flex w-60 flex-col items-start justify-between gap-6 bg-black p-3 pb-16 text-white">
      <div className="flex w-full flex-col items-start justify-start gap-6">
        <div className="inline-flex items-center justify-between gap-2 p-3 pb-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white">
            <Crown className="h-6 w-6 -rotate-12 stroke-black" />
          </span>
          <span className="text-xl">Backing</span>
        </div>
        <nav className="flex w-full flex-col items-start gap-3">
          {navItems.map((item) => {
            if (item.children) {
              return (
                <Collapsible
                  key={item.name}
                  open={openItems.includes(item.name)}
                  onOpenChange={() => toggleItem(item.name)}
                  className="w-full"
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2 text-base font-medium text-neutral-500 transition-colors duration-150 ease-in-out hover:bg-neutral-800 hover:text-neutral-50"
                    >
                      <span className="flex items-center gap-4">
                        <item.icon className="h-6 w-6" />
                        {item.name}
                      </span>
                      {openItems.includes(item.name) ? (
                        <ChevronUp className="h-6 w-6" />
                      ) : (
                        <ChevronDown className="h-6 w-6" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col items-start justify-start gap-1">
                    {item.children.map((child) => (
                      <div
                        key={child.name}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-1 text-base font-medium text-neutral-500 transition-colors duration-150 ease-in-out"
                      >
                        <label htmlFor={child.name} className="flex w-full gap-4 text-sm">
                          <span className="h-6 w-6"></span>
                          {child.name}
                          {child.count > 0 && <span className="text-gray-500">({child.count})</span>}
                        </label>
                        <Checkbox id={child.name} className="h-4 w-4 border-neutral-800" />
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-base font-medium text-neutral-500 transition-colors duration-150 ease-in-out hover:bg-neutral-800 hover:text-neutral-50"
              >
                <item.icon className="h-6 w-6" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-3">
        <Link
          href="/settings"
          className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-base font-medium text-neutral-500 transition-colors duration-150 ease-in-out hover:bg-neutral-800"
        >
          <Settings className="h-6 w-6" />
          Settings
        </Link>
        <Link
          href="/logout"
          className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-base font-medium text-neutral-500 transition-colors duration-150 ease-in-out hover:bg-neutral-800"
        >
          <LogOut className="h-6 w-6 rotate-180" />
          Log Out
        </Link>
      </div>
    </aside>
  );
}

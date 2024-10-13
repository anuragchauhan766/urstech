"use client";

import { Search, Calendar, Bell, ShoppingCart, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DatePicker } from "../ui/datePicker";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <Search className="mr-2 h-5 w-5 text-gray-400" />
        <Input type="search" placeholder="Search a product" className="w-64 border-none focus:outline-none" />
      </div>
      <div>
        <DatePicker />
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-neutral-500">
          <Mail className="h-6 w-6" />
          <span className="absolute right-[3px] top-[4px] inline-flex h-2 w-2 rounded-full bg-primary"></span>
        </Button>
        <Button variant="ghost" size="icon" className="relative text-neutral-500">
          <Bell className="h-6 w-6" />
          <span className="absolute right-[3px] top-[4px] inline-flex h-2 w-2 rounded-full bg-primary"></span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center justify-center gap-2">
              <span className="text-sm font-medium text-neutral-400">Hypebeast Store</span>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-white">H</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

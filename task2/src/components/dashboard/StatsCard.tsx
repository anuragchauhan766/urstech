import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface StatsCardProps {
  title: string;
  icon: React.ReactNode;
  stats: string;
  description: React.ReactNode;
  className?: string;
}

export const StatCard = ({ title, icon: Icon, stats, description, className }: StatsCardProps) => {
  return (
    <Card className={cn("p-4", className)}>
      <CardContent className="flex flex-col justify-between gap-6 p-0">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="mb-2 text-sm font-medium">{title}</h3>
            <div className="mb-1 text-2xl font-bold">{stats}</div>
          </div>
          {Icon}
        </div>
        <div>{description}</div>
      </CardContent>
    </Card>
  );
};

"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { format, parse } from "date-fns";

export const description = "A multiple line chart";

const chartData = [
  { date: "2014-10-25", totalEarn: 5234, totalViews: 4876 },
  { date: "2014-10-26", totalEarn: 6102, totalViews: 5321 },
  { date: "2014-10-27", totalEarn: 5789, totalViews: 4998 },
  { date: "2014-10-28", totalEarn: 6543, totalViews: 5678 },
  { date: "2014-10-29", totalEarn: 7012, totalViews: 6234 },
  { date: "2014-10-30", totalEarn: 6789, totalViews: 5987 },
  { date: "2014-10-31", totalEarn: 7456, totalViews: 6543 },
  { date: "2014-11-01", totalEarn: 8123, totalViews: 7234 },
  { date: "2014-11-02", totalEarn: 7890, totalViews: 6987 },
  { date: "2014-11-03", totalEarn: 8456, totalViews: 7543 },
  { date: "2014-11-04", totalEarn: 9012, totalViews: 8123 },
  { date: "2014-11-05", totalEarn: 8765, totalViews: 7890 },
  { date: "2014-11-06", totalEarn: 9345, totalViews: 8456 },
  { date: "2014-11-07", totalEarn: 9876, totalViews: 9012 },
  { date: "2014-11-08", totalEarn: 9543, totalViews: 8765 },
  { date: "2014-11-09", totalEarn: 10234, totalViews: 9345 },
  { date: "2014-11-10", totalEarn: 10789, totalViews: 9876 },
  { date: "2014-11-11", totalEarn: 10456, totalViews: 9543 },
  { date: "2014-11-12", totalEarn: 11123, totalViews: 10234 },
  { date: "2014-11-13", totalEarn: 11678, totalViews: 10789 },
];

const chartConfig = {
  totalEarn: {
    label: "Total Earn",
    color: "hsl(var(--chart-1))",
  },
  totalViews: {
    label: "Total Views",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function RevenueStats() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-primary">Revenue</CardTitle>
          <CardDescription>
            <span className="text-lg font-bold text-black">$2,810.00</span>{" "}
            <span className="text-xs text-green-500">(+8.26%)</span>
          </CardDescription>
        </div>
        <div className="flex items-center gap-3">
          {Object.entries(chartConfig).map(([key, config]) => (
            <span key={key} className="flex items-center gap-2 text-sm">
              <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: config.color }}></span>
              <span>{config.label}</span>
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[200px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 16,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => format(value, "d E")}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              width={10}
              tickFormatter={(value) => {
                if (value >= 1000) {
                  return `${(value / 1000).toFixed(0)}k`;
                }
                return value;
              }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Line dataKey="totalEarn" type="linear" stroke="var(--color-totalEarn)" strokeWidth={2} dot={false} />
            <Line dataKey="totalViews" type="linear" stroke="var(--color-totalViews)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

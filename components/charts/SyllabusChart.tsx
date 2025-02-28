"use client";

import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer } from "../ui/chart";

const courseData = [
  { topic: "HTML", completed: 80, color: "hsl(var(--chart-1))" },
  { topic: "HTML Tags", completed: 60, color: "hsl(var(--chart-2))" },
  { topic: "HTML Tables", completed: 24, color: "hsl(var(--chart-3))" },
  { topic: "CSS Basics", completed: 96, color: "hsl(var(--chart-4))" },
];

const chartConfig = {
  completed: {
    label: "Completion",
  },
} satisfies ChartConfig;

const SyllabusChart = () => {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart
        data={courseData}
        layout="vertical"
        margin={{ left: -10, right: 40, top: 20 }}
        barCategoryGap={20}
      >
        <YAxis
          dataKey="topic"
          type="category"
          tickLine={false}
          axisLine={false}
          width={120} // Sufficient width for labels
          tick={{
            fill: "var(--color-label)",
            fontSize: 14,
            fontWeight: "bold",
            style: { whiteSpace: "nowrap" },
          }}
        />
        <XAxis dataKey="completed" type="number" hide />

        <Bar dataKey="completed" radius={5}>
          {courseData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          <LabelList
            dataKey="completed"
            position="right"
            offset={10}
            formatter={(value: number) => `${value}%`}
            className="font-bold text-base"
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
};

export default SyllabusChart;

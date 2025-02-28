"use client";

import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts";
import { CardContent } from "../ui/card";
import { ChartConfig, ChartContainer } from "../ui/chart";

import useStore from "../../store/store";

const chartConfig = {
  percentage: {
    label: "Score",
    color: "hsl(var(--chart-1))",
  },
  students: {
    label: "Students",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-2 rounded shadow-md text-sm">
        <p className="font-semibold">Percentile: {data.percentage}</p>
        <p>Students: {data.students}</p>
      </div>
    );
  }
  return null;
};

const ComparisionChart: React.FC = () => {
  const {
    userData: { percentage: userPercentage },
    chartData,
  } = useStore();
  return (
    <CardContent>
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey="percentage"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            type="number"
            ticks={[0, 25, 50, 75, 100]}
          />

          <Tooltip content={<CustomTooltip></CustomTooltip>}></Tooltip>
          <Line
            dataKey="students"
            type="monotone"
            stroke="var(--color-students)"
            strokeWidth={2}
            dot={(dotProps) => {
              const { cx, cy, payload } = dotProps;
              const isUserScore = payload.percentage === userPercentage;

              return (
                <>
        
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isUserScore ? 8 : 4} // Bigger dot for user's score
                    fill={isUserScore ? "red" : "var(--color-students)"} 
                    stroke="white"
                    strokeWidth={isUserScore ? 2 : 1}
                  />

                
                  {isUserScore && (
                    <text
                      x={cx}
                      y={cy - 15} 
                      textAnchor="middle"
                      fontSize="12px"
                      fontWeight="bold"
                      fill="red"
                    >
                      Your Score
                    </text>
                  )}
                </>
              );
            }}
            activeDot={{
              r: 6,
            }}
          />
        </LineChart>
      </ChartContainer>
    </CardContent>
  );
};

export default ComparisionChart;

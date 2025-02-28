import testData from "@/data/chartData";
import _ from "lodash"; // Import lodash
import { create } from "zustand";
import { persist } from "zustand/middleware";
export type ChartData = {
  percentage: number;
  students: number;
};

export type Result = {
  rank: number;
  percentage: number;
  score: number;
};

export type ResultChartData = {
  userData: Result;
  chartData: ChartData[];
};

export type ResultActions = {
  updateResult: (result: Result) => void;
  updateChartData: (updated: number, previous: number) => void;
};

const useStore = create<ResultChartData & ResultActions>()(
  persist(
    (set, get) => ({
      userData: {
        rank: 8,
        percentage: 50,
        score: 10,
      },
      chartData: [...testData],

      updateResult: (result) => set(() => ({ userData: result })),

      updateChartData: (userPercentage, previousPercentage) =>
        set((state) => {
          const newChartData = _.cloneDeep(state.chartData);

          if (previousPercentage !== null) {
            const prevEntry = _.find(newChartData, {
              percentage: previousPercentage,
            });

            if (prevEntry) {
              if (prevEntry.students === 1) {
                _.remove(newChartData, { percentage: previousPercentage });
              } else {
                prevEntry.students -= 1;
              }
            }
          }

          const existingData = _.find(newChartData, {
            percentage: userPercentage,
          });

          if (existingData) {
            existingData.students += 1;
          } else {
            newChartData.push({ percentage: userPercentage, students: 1 });
            newChartData.sort((a, b) => a.percentage - b.percentage);
          }

          return { chartData: newChartData };
        }),
    }),
    {
      name: "zustand-storage",
    }
  )
);

export default useStore;

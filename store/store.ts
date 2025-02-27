import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Result = {
  rank: number;
  percentage: number;
  score: number;
};

export type ResultActions = {
  updateResult: (result: Result) => void;
};

const useStore = create<Result & ResultActions>()(
  persist(
    (set) => ({
      rank: 8,
      percentage: 30,
      score: 10,
      updateResult: (result) => set(() => ({ ...result })),
    }),
    {
      name: "result-storage",
    }
  )
);

export default useStore;

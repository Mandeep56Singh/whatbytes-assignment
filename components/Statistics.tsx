import useStore from "@/store/store";
import { Check, NotepadText, Trophy } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";

const Statistics = () => {
  const {
    userData: { rank, percentage, score },
  } = useStore();
  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-lg font-semibold">Quick Statistics</h1>
      <div className="flex justify-between gap-2 items-center">
        <div className="flex gap-2 items-center">
          <div className="bg-muted rounded-full size-10 flex justify-center items-center">
            <Trophy className="text-yellow-400" />
          </div>
          <div>
            <div className="font-bold sm:text-base text-sm">{rank}</div>
            <div className="text-xs">Rank</div>
          </div>
        </div>
        <Separator orientation="vertical" className="h-10"></Separator>
        <div className="flex items-center gap-2">
          <div className="bg-muted rounded-full size-10 flex justify-center items-center">
            <NotepadText className="text-blue-400" />
          </div>
          <div>
            <div className="font-bold sm:text-base text-sm">{percentage}%</div>
            <div className="text-xs">Percentile</div>
          </div>
        </div>
        <Separator orientation="vertical" className="h-10"></Separator>
        <div className="flex items-center gap-2">
          <div className="bg-muted rounded-full size-10 flex justify-center items-center">
            <Check className="text-green-400" />
          </div>
          <div>
            <div className="font-bold sm:text-base text-sm">{score}/15</div>
            <div className="text-xs">Answers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

"use client";
import useStore from "@/store/store";
import { Target } from "lucide-react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const QuestionChart = () => {
  const {
    userData: { score },
  } = useStore();
  const progressPercentage = (score / 15) * 100;
  return (
    <div className="size-32 mx-auto">
      <CircularProgressbarWithChildren
        value={progressPercentage}
        counterClockwise
      >
        <Target className="text-primary size-8"></Target>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default QuestionChart;

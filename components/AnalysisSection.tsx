import React from "react";
import QuestionAnalysis from "./QuestionAnalysis";
import SyllabusAnalysis from "./SyllabysAnalysis";

const AnalysisSection = () => {
  return (
    <div className="p-4 flex flex-col gap-4 flex-1 min-w-[300]">
      <SyllabusAnalysis></SyllabusAnalysis>
      <QuestionAnalysis></QuestionAnalysis>
    </div>
  );
};

export default AnalysisSection;

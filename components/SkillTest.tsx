import React from "react";
import Course from "./Course";
import Statistics from "./Statistics";
import ComparasionGraph from "./ComparasionGraph";


const SkillTest = () => {
  return (
    <div className="p-4 flex flex-col gap-4 flex-1 min-w-[300]">
  
      <Course></Course>
      <Statistics></Statistics>
      <ComparasionGraph></ComparasionGraph>
    </div>
  );
};

export default SkillTest;

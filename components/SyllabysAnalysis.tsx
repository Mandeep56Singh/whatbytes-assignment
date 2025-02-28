import React from "react";
import SyllabusChart from "./charts/SyllabusChart";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";

const SyllabusAnalysis = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Syllabus Wise Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <SyllabusChart></SyllabusChart>
      </CardContent>
    </Card>
  );
};

export default SyllabusAnalysis;

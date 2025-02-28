import useStore from "@/store/store";
import React from "react";
import Chart from "./Chart";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ComparasionGraph = () => {
  const { userData:{ percentage} } = useStore();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Comparasion Graph</CardTitle>
        <CardDescription>
          You scored <b>{percentage}%</b> percentile which is lower than the
          average 72% of all engineers who took this assestment
        </CardDescription>
      </CardHeader>
      <Chart></Chart>
    </Card>
  );
};

export default ComparasionGraph;

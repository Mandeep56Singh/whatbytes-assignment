import useStore from "@/store/store";
import React from "react";
import QuestionChart from "./charts/QuestionChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const QuestionAnalysis = () => {
  const {
    userData: { score },
  } = useStore();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Question Anaylasis</CardTitle>
        <CardDescription>
          You scored <b>{score}</b> questions out of 15.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <QuestionChart></QuestionChart>
      </CardContent>
    </Card>
  );
};

export default QuestionAnalysis;

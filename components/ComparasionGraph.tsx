import useStore from "@/store/store";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import ComparisionChart from "./charts/ComparisionChart";


const ComparasionGraph = () => {
  const {
    userData: { percentage },
  } = useStore();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Comparasion Graph</CardTitle>
        <CardDescription>
          You scored <b>{percentage}%</b> percentile which is lower than the
          average 72% of all engineers who took this assestment
        </CardDescription>
      </CardHeader>
      <ComparisionChart></ComparisionChart>
    </Card>
  );
};

export default ComparasionGraph;

import Card from "@/components/Card";
import { log } from "next/dist/server/typescript/utils";
const Results = ({ results }) => {
  return (
    <div
      className={
        "sm:grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-6xl mx-auto py-4"
      }
    >
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;

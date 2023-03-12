import React from "react";
import { Parent } from "./components/pure-components/pure-components";
import HocPattern from "./concepts/useMemo-useCallback/react-design-patterns/react-hoc-pattern";

export default function CandyDispenser() {
  // const initialCandies = ["snickers", "skittles", "twix", "milky way"];

  // console.log(initialCandies);

  return (
    <div>
      <h1>React Concepts</h1>
      {/* <Parent /> */}
      <HocPattern/>
    </div>
  );
}

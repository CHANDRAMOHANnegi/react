import React from "react";
import { Parent } from "./components/pure-components/pure-components";
import { Proxy } from "./concepts/proxy";
export default function CandyDispenser() {
  const initialCandies = ["snickers", "skittles", "twix", "milky way"];

  console.log(initialCandies);

  return (
    <div>
      <Proxy />
      {/* <h1>Candy Dispenser</h1> */}
      {/* <Parent /> */}
    </div>
  );
}

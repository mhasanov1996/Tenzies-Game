import React from "react";
import { Box } from "./Box";

export default function BoxList({ numbers, helding }) {
  return (
    <>
      {numbers.map((item, index) => (
        <Box
          key={index}
          props={numbers[index]}
          helding={helding}
          index={index}
        />
      ))}
    </>
  );
}

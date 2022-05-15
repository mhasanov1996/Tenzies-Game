import React from "react";
import { Box } from "./Box";

export const Main = () => {
  const allNumbers = () => {
    let newArr = [];
    for (let index = 1; index < 11; index++) {
      newArr.push(index);
    }
    return newArr;
  };

  const [numbers, setNumbers] = React.useState(allNumbers());

  const allBoxes = () => {
    const items = numbers.map((item, index) => {
      return <Box key={index} value={item} />;
    });
    return items;
  };

  return (
    <>
      <div className="board">
        <h1 className="board--header">Tenzies</h1>
        <p className="board--info">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="boxcontainer">{allBoxes()}</div>

        <button>Roll</button>
      </div>
    </>
  );
};

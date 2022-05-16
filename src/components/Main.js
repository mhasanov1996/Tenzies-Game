import React from "react";
import BoxList from "./BoxList";

export const Main = () => {
  const [numbers, setNumbers] = React.useState(allNumbers());

  function allNumbers() {
    return Array(10)
      .fill(null)
      .map(() => ({
        number: Math.ceil(Math.random() * 10),
        held: false,
      }));
  }

  const helding = (key) => {
    setNumbers((prevState) =>
      prevState.map((item, index) =>
        index === key ? { ...item, held: !item.held } : item
      )
    );
  };

  const isTenzies = () => {
    const tester = numbers[0].number;
    return numbers.every((item) => item.held && item.number === tester);
  };

  const handleClick = () => {
    if (isTenzies()) {
      setNumbers(allNumbers());
      return;
    }
    setNumbers((prevState) =>
      prevState.map((item) =>
        item.held ? item : { ...item, number: Math.ceil(Math.random() * 10) }
      )
    );
  };

  return (
    <>
      <div className="board">
        <h1 className="board--header">Tenzies</h1>
        <p className="board--info">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="boxcontainer">
          <BoxList numbers={numbers} helding={helding} />
        </div>
        <button onClick={handleClick}>{isTenzies() ? "Replay" : "Roll"}</button>
      </div>
    </>
  );
};

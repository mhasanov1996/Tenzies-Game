import React from "react";
import { Box } from "./Box";

export const Main = () => {
  const allNumbers = () => {
    let newArr = [];
    for (let index = 1; index < 11; index++) {
      newArr.push({
        number: Math.ceil(Math.random() * 10),
        held: false,
      });
    }
    return newArr;
  };

  const helding = (key) => {
    setNumbers((prevState) => {
      const newstate = prevState.map((item, index) => {
        return index === key ? { ...item, held: !item.held } : item;
      });
      return newstate;
    });
  };

  const [numbers, setNumbers] = React.useState(allNumbers());
  const [tenzies, setTenzies] = React.useState(false);

  const allBoxes = () => {
    const items = numbers.map((item, index) => {
      return (
        <Box
          key={index}
          props={numbers[index]}
          helding={helding}
          index={index}
        />
      );
    });
    return items;
  };

  React.useEffect(() => {
    const tester = numbers[0].number;
    if (numbers.every((item) => item.held)) {
      if (numbers.every((item) => item.number === tester)) {
        setTenzies(true);
      }
    }
  }, [numbers]);

  const handleClick = () => {
    if (tenzies) {
      setNumbers(allNumbers());
      setTenzies(false);
    } else {
      setNumbers((prevState) => {
        return prevState.map((item) => {
          return item.held
            ? item
            : { ...item, number: Math.ceil(Math.random() * 10) };
        });
      });
    }
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
        <button onClick={handleClick}>{tenzies ? "Replay" : "Roll"}</button>
      </div>
    </>
  );
};

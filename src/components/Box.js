import React from "react";

export const Box = ({ props, helding, index }) => {
  const styles = {
    backgroundColor: props.held ? "#59E391" : "white",
  };

  return (
    <>
      <div className="numberBox" style={styles} onClick={() => helding(index)}>
        {props.number}
      </div>
    </>
  );
};

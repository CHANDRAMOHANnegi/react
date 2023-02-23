import React, { useCallback } from "react";

export const Parent = () => {
  const [num, setNum] = React.useState(0);

  // if you remove useCallback then child will re-render every time because
  // new function reference will be passed to child every time

  const clickHandler = useCallback(() => {
    console.log("=--=-=");

    // Do something...
  }, []);

  const getChild = React.useMemo(() => <Child handleClick={clickHandler} />, [
    clickHandler
  ]);

  return (
    <>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>+</button>
      {getChild}
    </>
  );
};

const Child = ({ handleClick }) => {
  console.log("Child component re-rendered...");

  return (
    <>
      <h1>I am Child Component</h1>
      <button onClick={handleClick}>Button inside child</button>
    </>
  );
};

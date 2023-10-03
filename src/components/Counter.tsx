import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div>
      <h1>Current:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click!</button>
      <button onClick={() => setCount(0)}>Reset!</button>
    </div>
  );
};

export default Counter;

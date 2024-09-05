import React, { useState } from "react";

const Test = (props) => {
  console.log(props);
  let [num, setNum] = useState(1);

  function handleClick() {
    setNum(num = num + 1);
    console.log(num);
  }
  return (
    <>
      <h1>{num}</h1>
      <button onClick={handleClick}>click me</button>
      <div>{props.username}</div>
      <div>{props.course}</div>
    </>
  );
};

export default Test;

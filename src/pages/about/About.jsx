import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  let recivedCount = useSelector((state) => state.counter.count);
  let recieveInputvalue = useSelector(
    (state) => state.inputValueReciever.inputValue
  );
  return (
    <>
      <h1 className="text-4xl">{recivedCount}</h1>
      <h1 className="text-4xl">{recieveInputvalue}</h1>
    </>
  );
};

export default About;

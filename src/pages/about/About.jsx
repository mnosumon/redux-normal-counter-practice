import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  let recivedCount = useSelector((state) => state.counter.count);
  let recieveInputvalue = useSelector(
    (state) => state.inputValueReciever.inputValue
  );

  return (
    <>
      <div className="container">
        <h1 className="text-4xl">{recivedCount}</h1>
        {recieveInputvalue.map((item, index) => (
          <div key={index} className=" text-4xl">
            <h1>{item.id}</h1>
            <h1>{item.userName}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;

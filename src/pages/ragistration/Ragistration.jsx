import React from "react";
import RagistrationForm from "../../components/ragistration/RagistrationForm";

const Ragistration = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center w-1/2 mx-auto  shadow-md rounded-md">
          <div className="w-[48%]"></div>
          <div className="w-[48%] p-5">
            <h1 className="text-2xl font-mono font-bold mb-5">Registration</h1>
            <RagistrationForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ragistration;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputHandle } from "../../feature/inputRecieverSlice/InputRecieverSlice";

const User = () => {
  let [input, setInput] = useState("");
  const recieveInputvalue = useSelector(
    (state) => state.inputValueReciever.inputValue
  );
  let dispatch = useDispatch();

  let handleClick = (e) => {
    e.preventDefault();
    let idGenaret =
      recieveInputvalue.length > 0
        ? Math.max(...recieveInputvalue.map((item) => item.id))
        : 0;
    let users = {
      id: idGenaret + 1,
      userName: input,
    };
    dispatch(inputHandle(users));
    setInput("");
  };
  return (
    <>
      <div className="container">
        <h1 className="text-5xl text-orange-500 py-5 text-center">
          Add new user
        </h1>
        <form action="" className="w-[600px] mx-auto">
          <div className="text-center space-y-4">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="border-2 block  mx-auto w-full px-4 py-2 border-slate-700 placeholder-gray-400 focus:outline-none rounded-md"
              type="text"
              placeholder="Enter text here"
            />
            <button
              onClick={handleClick}
              className="py-2 px-4 bg-orange-500 text-white rounded-md text-2xl"
            >
              Add user
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default User;

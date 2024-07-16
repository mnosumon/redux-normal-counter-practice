import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../feature/inputRecieverSlice/InputRecieverSlice";

const About = () => {
  let recivedCount = useSelector((state) => state.counter.count);
  let dispatch = useDispatch();
  let recieveInputvalue = useSelector(
    (state) => state.inputValueReciever.inputValue
  );

  let handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  return (
    <>
      <div className="container">
        <h1 className="text-4xl">{recivedCount}</h1>
        <div className="grid grid-cols-4 gap-3 text-center">
          {recieveInputvalue.map((item, index) => (
            <div key={index} className=" text-4xl bg-orange-600 text-white">
              <h1>{item.id}</h1>
              <h1>{item.userName}</h1>
              <button
                onClick={() => handleDelete(item.id)}
                className="py-2 px-4 bg-orange-500 text-white rounded-md text-2xl"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;

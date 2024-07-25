import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { noteUpdate } from "../../feature/noteSlice/NoteSlice";

const UpdateNote = ({ setUpdatePartShow, mapItemSend }) => {
  let [editableTitle, setEditableTitle] = useState(mapItemSend.title || "");
  let [editableDescription, setEditableDescription] = useState(
    mapItemSend.description || ""
  );

  let dispatch = useDispatch();

  let handleNoteSave = (e) => {
    e.preventDefault();

    let updateNote = {
      id: mapItemSend.id,
      title: editableTitle,
      description: editableDescription,
      time: new Date().toString(),
    };
    dispatch(noteUpdate(updateNote));
    setUpdatePartShow(false);
  };
  let updatePartClose = () => {
    setUpdatePartShow(false);
  };
  return (
    <div className="w-1/3 rounded-md p-8 absolute top-[20%] left-1/2 -translate-x-1/2 bg-amber-500">
      <div
        onClick={updatePartClose}
        className="h-5 w-5 bg-slate-700 absolute top-1 right-1 cursor-pointer"
      ></div>
      <form action="">
        <div className="w-full mx-auto text-center">
          <input
            onChange={(e) => setEditableTitle(e.target.value)}
            value={mapItemSend.title}
            placeholder="Name"
            type="text"
            className="w-full py-3 px-5 outline-none border rounded-md border-blue-500"
          />
          <textarea
            onChange={(e) => setEditableDescription(e.target.value)}
            value={mapItemSend.description}
            maxLength={400}
            rows={4}
            className="w-full py-3 px-5 outline-none border rounded-md border-blue-500 resize-none my-3"
            placeholder="Type your note"
          />
          <button
            onClick={handleNoteSave}
            className="text-xl font-sans bg-black text-white py-2 px-8 rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateNote;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteDelete } from "../../feature/noteSlice/NoteSlice";
import UpdateNote from "./UpdateNote";

const Note = () => {
  let [visible, setVisible] = useState(6);
  let [updatePartShow, setUpdatePartShow] = useState(false);
  let [mapItemSend, setMapItemSend] = useState();

  let notes = useSelector((state) => state.notes.note);

  let dispatch = useDispatch();

  let noteItemDelete = (id) => {
    dispatch(noteDelete(id));
  };
  let handleLoadMore = () => {
    // setVisible(visible + 3);
    setVisible((prev) => prev + 3);
  };

  let handleNoteUpdate = (item) => {
    setUpdatePartShow(true);
    setMapItemSend(item);
  };

  return (
    <div className="container relative ">
      {updatePartShow && (
        <UpdateNote
          mapItemSend={mapItemSend}
          setUpdatePartShow={setUpdatePartShow}
        />
      )}
      <div className="grid grid-cols-3 gap-4 mt-2">
        {notes?.slice(0, visible).map((item, index) => {
          return (
            <div key={index} className="border border-blue-400 rounded-md p-3">
              <h2 className="text-4xl font-mono font-bold">{item.title}</h2>
              <p className="font-serif leading-6 my-4">{item.description}</p>
              <div className="flex items-center justify-end gap-4">
                <button
                  onClick={() => noteItemDelete(item.id)}
                  className="text-xl font-sans py-2 px-4 bg-red-800 text-white rounded-md"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleNoteUpdate(item)}
                  className="text-xl font-sans py-2 px-4 bg-orange-500 text-white rounded-md"
                >
                  Update
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {notes.length > visible && (
        <div className="text-center mt-5">
          <button
            onClick={handleLoadMore}
            className="text-xl font-mono py-2 px-4 bg-yellow-400 rounded-md"
          >
            Load more...
          </button>
        </div>
      )}
    </div>
  );
};

export default Note;

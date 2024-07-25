import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  note: [],
};

let saveNote = JSON.parse(localStorage.getItem("note"));
if (saveNote) {
  initialState.note = saveNote;
}

const NoteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    notesAdd: (state, action) => {
      state.note.push(action.payload);
      //   state.note = [...state.note, action.payload];
      localStorage.setItem("note", JSON.stringify(state.note));
    },
    noteDelete: (state, action) => {
      state.note = state.note.filter((item) => item.id !== action.payload);
      localStorage.setItem("note", JSON.stringify(state.note));
    },
    noteUpdate: (state, action) => {
      let { id, title, description, time } = action.payload;
      let updatableNote = state.note.find((item) => item.id == id);
      if (updatableNote) {
        updatableNote.id = id;
        updatableNote.title = title;
        updatableNote.description = description;
        updatableNote.time = time;
        localStorage.setItem("note", JSON.stringify(state.note));
      }
    },
  },
});
export const { notesAdd, noteDelete, noteUpdate } = NoteSlice.actions;
export default NoteSlice.reducer;

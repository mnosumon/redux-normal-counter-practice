import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./feature/counterSlice/CounterSlice";
import InputRecieverSlice from "./feature/inputRecieverSlice/InputRecieverSlice";
import NoteSlice from "./feature/noteSlice/NoteSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    inputValueReciever: InputRecieverSlice,
    notes: NoteSlice,
  },
});

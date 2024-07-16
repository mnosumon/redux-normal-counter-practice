import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
};

export const InputRecieverSlice = createSlice({
  name: "valueRecieve",
  initialState,
  reducers: {
    inputHandle: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { inputHandle } = InputRecieverSlice.actions;

export default InputRecieverSlice.reducer;

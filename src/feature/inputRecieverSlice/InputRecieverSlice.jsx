import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: [],
};

export const InputRecieverSlice = createSlice({
  name: "valueRecieve",
  initialState,
  reducers: {
    inputHandle: (state, action) => {
      state.inputValue.push(action.payload);
    },
    deleteUser: (state, action) => {
      let filterUser = state.inputValue;
      state.inputValue = filterUser.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { inputHandle, deleteUser } = InputRecieverSlice.actions;

export default InputRecieverSlice.reducer;

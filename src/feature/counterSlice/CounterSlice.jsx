import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

export const { increment } = CounterSlice.actions

export default CounterSlice.reducer
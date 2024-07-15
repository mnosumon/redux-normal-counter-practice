import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './feature/counterSlice/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
})
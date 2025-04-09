import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counterSlice'
import { stackSlice } from './slices/stackSlice'
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    stack: stackSlice.reducer
  },
})
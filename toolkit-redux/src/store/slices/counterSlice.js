import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {counter: 1, valueToIncrement: 1},
  reducers: {
    increment: (state) => {
      state.counter++
    },
    incrementBy: (state, action) => {
      state.counter += action.payload
    },
    decrement: (state) => {
      state.counter--
    },
    setValueToIncrement: (state, action) => {
      state.valueToIncrement = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy, setValueToIncrement} = counterSlice.actions
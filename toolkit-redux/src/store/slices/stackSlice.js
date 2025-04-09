import { createSlice } from '@reduxjs/toolkit'

export const stackSlice = createSlice({
  name: 'stack',
  initialState: {stack: []},
  reducers: {
    push: (state, action) => {
      state.stack.unshift(action.payload)
    },
    pop: (state) => {
      state.stack.shift()
    }
  },
})

// Action creators are generated for each case reducer function
export const {push, pop} = stackSlice.actions
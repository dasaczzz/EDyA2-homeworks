import { createSlice } from '@reduxjs/toolkit'

export const stackSlice = createSlice({
  name: 'stack',
  initialState: {
    stack: [
      'pc',
      'keyboard',
      'laptop'
    ],
    itemToAdd: ''
},
  reducers: {
    push: (state) => {
      state.stack.unshift(state.itemToAdd)
    },
    pop: (state) => {
      state.stack.shift()
    },
    setItemToAdd: (state, action) => {
      state.itemToAdd = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {push, pop, setItemToAdd} = stackSlice.actions
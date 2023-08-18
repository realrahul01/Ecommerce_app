import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './../components/AddCart/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
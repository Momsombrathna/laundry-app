import { configureStore } from '@reduxjs/toolkit'
import appSliceReducer from '../slices/appSlice'

export const store = configureStore({
  reducer: {
    sliceItems: appSliceReducer,
  },
  devTools:true
})
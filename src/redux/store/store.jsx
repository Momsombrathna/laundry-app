import { configureStore } from '@reduxjs/toolkit'
import appSliceReducer from '../slices/appSlice'
import dataSliceReducer from '../slices/dataSlice'

export const store = configureStore({
  reducer: {
    sliceItems: appSliceReducer,
    data: dataSliceReducer,
  },
  devTools:true
})
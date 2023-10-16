import { configureStore } from '@reduxjs/toolkit'
import barcodeSliceReducer from '../slices/barcodeSlice'

export const store = configureStore({
  reducer: {
      barcodeScanner: barcodeSliceReducer,
  },
  devTools:true
})
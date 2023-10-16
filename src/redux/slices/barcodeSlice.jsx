import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    barcode: '',
}
const barcodeSlice = createSlice({
    name: 'barcodeScanner',
    initialState,
    reducers: {
        setBarcode: (state, action) =>{
            state.barcode = action.payload
        }
    }
}) 

export const {setBarcode} = barcodeSlice.actions;
export default barcodeSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    barcode: '',
    type: '',
    color: '',
    brand: '',
}
const barcodeSlice = createSlice({
    name: 'barcodeScanner',
    initialState,
    reducers: {
        setBarcode: (state, action) =>{
            state.barcode = action.payload
        },

        setType: (state, action) =>{
            state.type = action.payload
        },

        setColor: (state, action) =>{
            state.color = action.payload
        },

        setBrand: (state, action) =>{
            state.brand = action.payload
        },
    }
}) 

export const {setBarcode, setType, setColor, setBrand} = barcodeSlice.actions;
export default barcodeSlice.reducer;

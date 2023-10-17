import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    barcode: '',
    type: '',
    color: '',
    brand: '',
    note: '',
}
const appSlice = createSlice({
    name: 'sliceItems',
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

        setNote: (state, action) =>{
            state.note = action.payload
        },
    }
}) 

export const {setBarcode, setType, setColor, setBrand, setNote} = appSlice.actions;
export default appSlice.reducer;

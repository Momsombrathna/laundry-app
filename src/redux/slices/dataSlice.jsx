import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataItems: [],
};

const dataSlice = createSlice({
    name: "data",
    initialState,

    reducers: {
        
        addItem(state, action) {
          // const existingItem = state.dataItems.find((item) => item.action.payload.barcode === action.payload.barcode);
          
          // if (!existingItem) {
            state.dataItems.push({
              barcode: action.payload.barcode,
              type: action.payload.type,
              color: action.payload.color,
              brand: action.payload.brand,
              note: action.payload.note,
            });
          // }
         
        },

        deleteItems(state, action) {  
            // const id = action.payload;          
            // const existingItem = state.dataItems.find((item) => item.id === id);
            // if (existingItem) {
            //   state.dataItems = state.dataItems.filter((item) => item.id !== id);
            // }
            
            // setItemFunc(
            //   state.dataItems.map((item) => item),
            // );

            const existingItem = state.dataItems.find((item) => item.action.payload.barcode === action.payload.barcode);
            if (existingItem) {
              state.dataItems = state.dataItems.filter((item) => item.action.payload.barcode !== action.payload.barcode);
            }
        }

      },
});

export const {addItem, deleteItems} = dataSlice.actions;
export default dataSlice.reducer;
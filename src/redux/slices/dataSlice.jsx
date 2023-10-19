import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("dataItems") !== null ? JSON.parse(localStorage.getItem("dataItems")) : [];

const setItemFunc = (item) => {
    localStorage.setItem("dataItems", JSON.stringify(item));
};

const initialState = {
    dataItems: items,
};

const dataSlice = createSlice({
    name: "data",
    initialState,

    reducers: {
    
        addItem(state, action) {
          state.dataItems.push({
            barcode: action.payload.barcode,
            type: action.payload.type,
            color: action.payload.color,
            brand: action.payload.brand,
            note: action.payload.note,
          });
           
          setItemFunc(
            state.dataItems.map((item) => item),
          );
        },

        deleteItems(state, action) {  
            const id = action.payload;          
            const existingItem = state.dataItems.find((item) => item.id === id);
            if (existingItem) {
              state.dataItems = state.dataItems.filter((item) => item.id !== id);
            }
            
            setItemFunc(
              state.dataItems.map((item) => item),
            );
        }

        // setDataItems(state, action){
        //     state.dataItems = action.payload;
        // }
  
      },
});

export const {addItem, deleteItems} = dataSlice.actions;
export default dataSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataItems: [],
};

const dataSlice = createSlice({
    name: "data",
    initialState,

    reducers: {  
      
        addItem(state, action) {          
          const { barcode, type, color, brand, note } = action.payload;
          const existingItem = state.dataItems.find(data => data.barcode === barcode);

           if (existingItem) {
              existingItem.type = type; 
              existingItem.color = color;
              existingItem.brand = brand;
              existingItem.note = note;
           }else{
              state.dataItems.push({
                barcode: action.payload.barcode,
                type: action.payload.type,
                color: action.payload.color,
                brand: action.payload.brand,
                note: action.payload.note,
              });
           }
        },

        deleteItems(state, action) {
          const itemIDs = action.payload;
        
          const newDataItems = state.dataItems.filter(
            (item) => !itemIDs.includes(item.barcode)
          );
        
          return {
            ...state,
            dataItems: newDataItems,
          };
        }

      },
});

export const {addItem, deleteItems} = dataSlice.actions;
export default dataSlice.reducer;
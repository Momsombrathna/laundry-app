import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
              
              toast.success(`Barcode: ${barcode} has been updated`); 
          
           }else{
              state.dataItems.push({
                barcode: action.payload.barcode,
                type: action.payload.type,
                color: action.payload.color,
                brand: action.payload.brand,
                note: action.payload.note,
              });

              toast.success(`Barcode: ${barcode} has been saved`);
           }
        },

        deleteItems(state, action) {
          const itemIDs = action.payload;
        
          const newDataItems = state.dataItems.filter(
            (item) => !itemIDs.includes(item.barcode)
          );
        
          // create an array of barcodes of the deleted items
          const deletedBarcodes = state.dataItems
            .filter((item) => itemIDs.includes(item.barcode))
            .map((item) => item.barcode);
        
          // join the array elements with commas and spaces
          const barcodeString = deletedBarcodes.join(", ");
        
          // show an alert message with the barcode string
          toast.success(`Barcode: ${barcodeString} has been deleted`);
        
          return {
            ...state,
            dataItems: newDataItems,
          };
        }
        

      },
});

export const {addItem, deleteItems} = dataSlice.actions;
export default dataSlice.reducer;
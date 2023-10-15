import React, {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BarcodeScanner from '../components/BarcodeScanner';
import Clothes from '../components/Clothes';
import Color from '../components/Color';
import Brand from '../components/Brand';
import Note from '../components/Note';
import TakePhoto from '../components/TakePhoto';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


    const Home = () => {

      const drawerWidth = 240;

      const [currentComponent, setCurrentComponent] = useState(1);
      const [selectedItems, setSelectedItems] = useState([]);
    
      const handleNextButtonClick = () => {
        setCurrentComponent(currentComponent + 1);
      };
    
      const handlePreviousButtonClick = () => {
        setCurrentComponent(currentComponent - 1);
      };
    
      const handleItemSelection = (item) => {
        setSelectedItems([...selectedItems, item]);
      };

    
      const handleSubmit = () => {

      // Insert the selected items into indexedDB
      const selectedItemsData = {
        items: selectedItems
      };

      // Assuming you have an indexedDB instance named "myDB"
      const request = window.indexedDB.open("myDB", 1);

      request.onerror = (event) => {
        console.log("Error opening indexedDB:", event.target.error);
      };

      request.onsuccess = (event) => {
        const db = event.target.result;

        // Create a transaction and access the object store
        const transaction = db.transaction(["selectedItems"], "readwrite");
        const objectStore = transaction.objectStore("selectedItems");

        // Add the selected items data to the object store
        const addRequest = objectStore.add(selectedItemsData);

        addRequest.onsuccess = () => {
          console.log("Selected items inserted into indexedDB");
        };

        addRequest.onerror = (event) => {
          console.log("Error inserting selected items:", event.target.error);
        };

        // Reset the selected items
        setSelectedItems([]);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // Create an object store if it doesn't exist
        if (!db.objectStoreNames.contains("selectedItems")) {
          db.createObjectStore("selectedItems", { autoIncrement: true });
        }
      };
        setSelectedItems([]);
      };



    return (
      <>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
  
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              color: 'text.disabled',
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: 'gray' },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
  
              <List>
  
                <BarcodeScanner onItemSelection={handleItemSelection} />
  
              </List>
  
            </Box>
          </Drawer>
  
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
  
          {currentComponent === 1 && <Clothes onItemSelection={handleItemSelection} />}
          {currentComponent === 2 && <Color onItemSelection={handleItemSelection} />}
          {currentComponent === 3 && <Brand onItemSelection={handleItemSelection} />}
          {currentComponent === 4 && <Note onItemSelection={handleItemSelection} />}
          {currentComponent === 5 && <TakePhoto onItemSelection={handleItemSelection} />}
          {currentComponent !== 1 && (
            <Button container spacing={8}  variant="outlined" size="meduim" onClick={handlePreviousButtonClick}>
              BACK
            </Button>
          )}
          &nbsp; &nbsp; 
          {currentComponent !== 5 && (
            <Button container spacing={8} variant="contained" size="medium" onClick={handleNextButtonClick}>
              NEXT
              <ArrowForwardIcon />
            </Button>
          )}
          {currentComponent === 5 && (
            <Button container spacing={8} variant="contained" size="medium" onClick={handleSubmit}>
              SUBMIT
            </Button>
          )}
  
          </Box>
  
        </Box>
  
      </>
    );
  };
  
  export default Home;
  
import React, {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BarcodeScanner from '../components/BarcodeScanner';
import { Link } from '@mui/material';
import { useSelector } from 'react-redux';
import Color from '../components/Color';
import Type from '../components/Type';
import Brand from '../components/Brand';
import Note from '../components/Note';
import TakePhoto from '../components/TakePhoto';

  const idb =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

  const createCollectionsIndexedDB = () => {
    //check for support
    if (!idb) {
        console.log("This browser doesn't support IndexedDB");
        return;
    }



    var request = indexedDB.open("laundry", 2);
    request.onupgradeneeded = () => {
        //var db = event.target.result;
        var db = request.result;
        db.createObjectStore("items",{keyPath:"id", autoIncrement:true});
        // document.write("Object store Created Successfully...");
    };

    request.onsuccess = function () {
      console.log("Database opened successfully");
    };
  }

    const [currentComponent, setCurrentComponent] = useState(1);
    const [selectedItems, setSelectedItems] = useState([]);
  
    const handleNextButtonClick = () => {
      setCurrentComponent(currentComponent + 1);
    };
  
    const handlePreviousButtonClick = () => {
      setCurrentComponent(currentComponent - 1);
    };


  const drawerWidth = 240;

  const Home = () => {
    const barcode = useSelector(
      (state) => state.barcodeScanner.barcode,
    );

    const [type, setType] = useState(" ");  
    const selectDropdownItem = (id, val) => {
      setType(val);
    };

    useEffect(()=>{
      createCollectionsIndexedDB();
    }, []);

    //Insert Data
    const handleSubmit = () => {
      const dbPromise = idb.open("laundry", 2);
      if(type){
          dbPromise.onsuccess = () => {
              const db = dbPromise.result;

              var tx = db.transaction("items", "readwrite");
              var customerData = tx.objectStore("items");
              const items = customerData.put({id:barcode,type});
              items.onsuccess = () => {
                  tx.oncomplete = function () {
                      db.close();
                  };
              }
              items.onerror = (event) => {
                  console.log(event);
                  alert("Error occur");
              }
          }
      }
  }




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
  
                <BarcodeScanner />
  
              </List>
  
            </Box>
          </Drawer>
  
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
  
          {currentComponent === 1 && <Type  />}
          {currentComponent === 2 && <Color  />}
          {currentComponent === 3 && <Brand  />}
          {currentComponent === 4 && <Note  />}
          {currentComponent === 5 && <TakePhoto  />}
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
  
  
            <br /><br /><br />
            

  
          {/*           
            <Button container spacing={8} variant="contained" size="large" disableElevation onClick={handleSubmit}>
              Next
            </Button> */}
  
          </Box>
  
        </Box>
  
      </>
    );
  };
  
  export default Home;
  
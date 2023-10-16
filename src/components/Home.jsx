import React, {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BarcodeScanner from './BarcodeScanner';
import { Link } from 'react-router-dom';
// import { Link } from '@mui/material';

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


  const drawerWidth = 240;

  const Home = () => {
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
              const items = customerData.put({id:1,type});
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
  
          <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
  
            <Grid container spacing={10}>
              <Grid item xs={4}>
                  <div className="container" onClick={() => selectDropdownItem('design-dropdown', 'T-shirt')} style={{cursor:'pointer'}}>
                    <img width="96" height="96" src="https://img.icons8.com/fluency/96/polo-shirt.png" alt="polo-shirt"  
                     />
                    <div class="overlay">
                      <div class="text name">T-shirt</div>
                    </div>
                  </div>              
              </Grid>
              <Grid item xs={4}>
                  <div class="container">
                    <img width="96" height="96" src="https://img.icons8.com/color/96/shirt.png" alt="shirt"
                     onClick={() => selectDropdownItem('design-dropdown', 'Shirt')} style={{cursor:'pointer'}}/>
                     <div class="overlay">
                      <div class="text name">Shirt</div>
                    </div>
                  </div>
              </Grid>
              <Grid item xs={4}>
                  <div class="container" onClick={() => selectDropdownItem('design-dropdown', 'Jeans')} style={{cursor:'pointer'}}>
                    <img width="100" height="100" src="https://img.icons8.com/plasticine/100/jeans.png" alt="jeans"
                     /> 
                     <div class="overlay">
                      <div class="text name">Jeans</div>
                    </div> 
                  </div>
              </Grid>
              <Grid item xs={4}>
                <div class="container" onClick={() => selectDropdownItem('design-dropdown', 'Dress')} style={{cursor:'pointer'}}>
                  <img width="96" height="96" src="https://img.icons8.com/emoji/96/dress.png" alt="dress"
                     />
                     <div class="overlay">
                      <div class="text name">Dress</div>
                    </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div class="container" onClick={() => selectDropdownItem('design-dropdown', 'Demin Shorts')} style={{cursor:'pointer'}}>
                <img width="96" height="96" src="https://img.icons8.com/color/96/denim-shorts.png" alt="denim-shorts"
                     />
                     <div class="overlay">
                      <div class="text name">Denim Shorts</div>
                    </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div class="container" onClick={() => selectDropdownItem('design-dropdown', 'Suit')} style={{cursor:'pointer'}}>
                <img width="100" height="100" src="https://img.icons8.com/plasticine/100/suit.png" alt="suit"
                     />
                     <div class="overlay">
                      <div class="text name">Suit</div>
                    </div>
                </div>
              </Grid>
            </Grid>
  
            <br /><br /><br />
            
            <select id="design-dropdown" value={type} onChange={(e) => setType(e.target.value)} style={{display:'none'}}>
              <option>Select here or click a pattern above.</option>
              <option value="T-shirt">T-shirt</option>
              <option value="Shirt">Shirt</option>
              <option value="Jeans">Jeans</option>
              <option value="Demin">Demin</option>
              <option value="Shorts">Shorts</option>
              <option value="Suit">Suit</option>
            </select>
            <Link to = "/color">
            <Button container spacing={8} variant="contained"  size="large" disableElevation>
              Next
            </Button>
            </Link>
             
          </Box>
        </Box>
      </>
    );
  };
  
  export default Home;
  
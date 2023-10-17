//import React, {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BarcodeScanner from './BarcodeScanner';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../redux/slices/barcodeSlice';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

  const drawerWidth = 240;

  const Home = () => {
    
    const dispatch = useDispatch();
    const type = useSelector(
      (state) => state.barcodeScanner.type,
    );

    const selectDropdownItem = (id, val) => {
        dispatch(setType(val));
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
            
            <Box sx={{ overflow: 'auto' }}>
  
              <List>
  
                <BarcodeScanner />
  
              </List>
  
            </Box>
          </Drawer>
  
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
  
            <Grid container spacing={4}>
              <Grid item xs={4}>
                  <button className="container" onClick={() => selectDropdownItem('design-dropdown', 'T-shirt')} style={{cursor:'pointer'}}>
                    <img width="96" height="96" src="https://img.icons8.com/fluency/96/polo-shirt.png" alt="polo-shirt"  
                     />
                    <div class="overlay">
                      <div class="text name">T-shirt</div>
                    </div>
                  </button>              
              </Grid>
              <Grid item xs={4}>
                  <button class="container">
                    <img width="96" height="96" src="https://img.icons8.com/color/96/shirt.png" alt="shirt"
                     onClick={() => selectDropdownItem('design-dropdown', 'Shirt')} style={{cursor:'pointer'}}/>
                     <div class="overlay">
                      <div class="text name">Shirt</div>
                    </div>
                  </button>
              </Grid>
              <Grid item xs={4}>
                  <button class="container" onClick={() => selectDropdownItem('design-dropdown', 'Jeans')} style={{cursor:'pointer'}}>
                    <img width="100" height="100" src="https://img.icons8.com/plasticine/100/jeans.png" alt="jeans"
                     /> 
                     <div class="overlay">
                      <div class="text name">Jeans</div>
                    </div> 
                  </button>
              </Grid>
              <Grid item xs={4}>
                <button class="container" onClick={() => selectDropdownItem('design-dropdown', 'Dress')} style={{cursor:'pointer'}}>
                  <img width="96" height="96" src="https://img.icons8.com/emoji/96/dress.png" alt="dress"
                     />
                     <div class="overlay">
                      <div class="text name">Dress</div>
                    </div>
                </button>
              </Grid>
              <Grid item xs={4}>
                <button class="container" onClick={() => selectDropdownItem('design-dropdown', 'Demin Shorts')} style={{cursor:'pointer'}}>
                <img width="96" height="96" src="https://img.icons8.com/color/96/denim-shorts.png" alt="denim-shorts"
                     />
                     <div class="overlay">
                      <div class="text name">Denim Shorts</div>
                    </div>
                </button>
              </Grid>
              <Grid item xs={4}>
                <button class="container" onClick={() => selectDropdownItem('design-dropdown', 'Suit')} style={{cursor:'pointer'}}>
                <img width="100" height="100" src="https://img.icons8.com/plasticine/100/suit.png" alt="suit"
                     />
                     <div class="overlay">
                      <div class="text name">Suit</div>
                    </div>
                </button>
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
  
          
            <Link to="/color">
            <Button container spacing={8} variant="contained" endIcon={<ArrowForwardIcon />} size="large" disableElevation disabled={!type}>
              Next
            </Button>
            </Link>
  
          </Box>
  
        </Box>
  
      </>
    );
  };
  
  export default Home;
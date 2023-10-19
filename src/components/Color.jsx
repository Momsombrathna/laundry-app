//import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
//import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import ShowRecorde from './ShowRecorde';

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BarcodeScanner from './BarcodeScanner';
//import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from '../redux/slices/appSlice';

const drawerWidth = 240;

const Color = () => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const barcode = state.sliceItems.barcode;
  const color = state.sliceItems.color;

  const selectDropdownItem = (id, val) => {
    dispatch(setColor(val));
  };

  

    return (
      <>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline style={{ backgroundColor: 'gray'}} />
  
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
                <br />
                <ShowRecorde />
  
              </List>
  
            </Box>
          </Drawer>
  
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
  
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <button className="circle" onClick={() => selectDropdownItem('design-dropdown', 'F9DEC9')} style={{cursor:'pointer'}}> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle1" onClick={() => selectDropdownItem('design-dropdown', '#37E2D5')} style={{cursor:'pointer'}}> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle2" onClick={() => selectDropdownItem('design-dropdown', '#FFF99')} style={{cursor:'pointer'}}> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle3" onClick={() => selectDropdownItem('design-dropdown', '#CC0066')} style={{cursor:'pointer'}}> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle4" onClick={() => selectDropdownItem('design-dropdown', '#0099FF')} style={{cursor:'pointer'}}> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle5" onClick={() => selectDropdownItem('design-dropdown', '#FF99FF')} style={{cursor:'pointer'}}> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle6" onClick={() => selectDropdownItem('design-dropdown', '#FF6600')} style={{cursor:'pointer'}}> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle7" onClick={() => selectDropdownItem('design-dropdown', '#993399')} style={{cursor:'pointer'}}> </button>
              </Grid>
            </Grid>          
  
            <br /><br />
            <Link to="/brand">
            <Button container spacing={8} variant="outlined" size="meduim" disableElevation  >
              BACk
            </Button>
            </Link>

            &nbsp;&nbsp;            
  
            
            <Button container spacing={8} variant="contained"  size="meduim" disableElevation disabled={!color || !barcode}>
            <Link to="/program" style={{ color: 'white'}}>
              NEXT
              </Link>
            </Button>
            
  
          </Box>
  
        </Box>


        
  
      </>
    );
  };
  
  export default Color;


  
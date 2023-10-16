//import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BarcodeScanner from './BarcodeScanner';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from '../redux/slices/barcodeSlice';
const drawerWidth = 240;

const Color = () => {

  const dispatch = useDispatch();
  const color = useSelector(
    (state) => state.barcodeScanner.color,
  );

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
  
              </List>
  
            </Box>
          </Drawer>
  
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
  
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <button className="circle" onClick={() => selectDropdownItem('design-dropdown', 'F9DEC9')} style={{cursor:'pointer'}}> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle1" onClick={() => selectDropdownItem('design-dropdown', '37E2D5')} style={{cursor:'pointer'}}> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle2" onClick={() => selectDropdownItem('design-dropdown', 'ffff99')} style={{cursor:'pointer'}}> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle3" onClick={() => selectDropdownItem('design-dropdown', 'cc0066')} style={{cursor:'pointer'}}> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle4" onClick={() => selectDropdownItem('design-dropdown', '0099ff')} style={{cursor:'pointer'}}> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle5" onClick={() => selectDropdownItem('design-dropdown', 'ff99cc')} style={{cursor:'pointer'}}> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle6" onClick={() => selectDropdownItem('design-dropdown', 'ff6600')} style={{cursor:'pointer'}}> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle7" onClick={() => selectDropdownItem('design-dropdown', '993399')} style={{cursor:'pointer'}}> </button>
              </Grid>
            </Grid>
            <br /><br /><br />
            
            <select id="design-dropdown" value={color} onChange={(e) => setColor(e.target.value)} style={{display:'none'}}>
              <option>Select Color.</option>
              <option value="F9DEC9">F9DEC9</option>
              <option value="37E2D5">37E2D5</option>
              <option value="ffff99">ffff99</option>
              <option value="cc0066">cc0066</option>
              <option value="0099ff">0099ff</option>
              <option value="ff99cc">ff99cc</option>
              <option value="ff6600">ff6600</option>
              <option value="993399">993399</option>
            </select>
  
            <br /><br /><br />
            <Link to="/">
            <Button container spacing={8} variant="outlined" size="meduim" disableElevation startIcon={<ArrowBackIcon />} >
              BACk
            </Button>
            </Link>

            &nbsp;&nbsp;            
  
            <Link to="/brand">
            <Button container spacing={8} variant="contained" endIcon={<ArrowForwardIcon />} size="meduim" disableElevation disabled={!color}>
              NEXT
            </Button>
            </Link>
  
          </Box>
  
        </Box>


        
  
      </>
    );
  };
  
  export default Color;
  
import * as React from 'react';
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
const drawerWidth = 240;

const Note = () => {

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

          <h2>Note</h2>
  
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

  
            <textarea name="" style={{backgroundColor: 'white', color: 'black', width: '500px'}} id="" cols="30" rows="10"></textarea>

  
            <br /><br /><br />
            <Link to="/brand">
            <Button container spacing={8} variant="outlined" size="meduim" disableElevation startIcon={<ArrowBackIcon />} >
              BACk
            </Button>
            </Link>

            &nbsp;&nbsp;
  
            {/* <Link to="/brand"> */}
            <Button container spacing={8} variant="contained" endIcon={<ArrowForwardIcon />}  size="meduim" disableElevation>
              Submit
            </Button>
            {/* </Link> */}
  
          </Box>
  
        </Box>

  
      </>
    );
  };
  
  export default Note;
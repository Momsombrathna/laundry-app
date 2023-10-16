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

const Color = () => {

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
                <button className="circle"> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle1"> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle2"> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle3"> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle4"> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle5"> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle6"> </button>
              </Grid>
              <Grid item xs={3}>
              <button className="circle7"> </button>
              </Grid>
            </Grid>

  
            <br /><br /><br />
            <Link to="/">
            <Button container spacing={8} variant="outlined" size="meduim" disableElevation startIcon={<ArrowBackIcon />} >
              BACk
            </Button>
            </Link>

            &nbsp;&nbsp;
  
            <Link to="/brand">
            <Button container spacing={8} variant="contained" endIcon={<ArrowForwardIcon />}  size="meduim" disableElevation>
              NEXT
            </Button>
            </Link>
  
          </Box>
  
        </Box>


        
  
      </>
    );
  };
  
  export default Color;
  
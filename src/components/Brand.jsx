//import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
//import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BarcodeScanner from './BarcodeScanner';
//import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch, useSelector } from 'react-redux';
import { setBrand } from '../redux/slices/appSlice';
const drawerWidth = 240;

const Brand = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const barcode = state.sliceItems.barcode;
    const brand = state.sliceItems.brand;

    const selectDropdownItem = (id, val) => {
      dispatch(setBrand(val));
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
  
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <button className="container" onClick={() => selectDropdownItem('design-dropdown', 'Adidas')} style={{cursor:'pointer'}}>
                <img width="100" height="100" 
                src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/202714.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5NzU4NzIwMCwicSI6bnVsbCwiaWF0IjoxNjk3MzgxODQ3fQ__.afffdfb4213d931ace7406817d5053992d79531b07f5806c81e21194bb464386"
                alt="polo-shirt" />
                <div className="overlay">
      
                </div>
              </button>
            
            </Grid>
            <Grid item xs={4}>
              <button className="container" onClick={() => selectDropdownItem('design-dropdown', 'Levis')} style={{cursor:'pointer'}}>
                <img width="100" height="100" 
                src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/202644.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5NzU4NzIwMCwicSI6bnVsbCwiaWF0IjoxNjk3MzgxODQ3fQ__.56ec4dfe9b09ac10b8f507b5ffce94f484562809c22be59e98a047fc8c5f7d5e" 
                alt="Levi's" style={{ cursor: 'pointer' }} />
                <div className="overlay">
      
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" onClick={() => selectDropdownItem('design-dropdown', 'Calvin klein')} style={{cursor:'pointer'}}>
                <img width="100" height="100" 
                src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/202551.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5NzU4NzIwMCwicSI6bnVsbCwiaWF0IjoxNjk3MzgxODQ3fQ__.060294b56abed9e3baa76e6d85778f432e4d9dd19379f2e446ed4bc032e1bbce" 
                alt="Calvin klein" />
                <div className="overlay">
                  
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" onClick={() => selectDropdownItem('design-dropdown', 'Gucci')} style={{cursor:'pointer'}}>
                <img width="100" height="100" 
                src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/202607.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5NzU4NzIwMCwicSI6bnVsbCwiaWF0IjoxNjk3MzgxODQ4fQ__.b38b05790e6c8e7d786170b9d8c8e3dae8552b228ace1273496451d217e8dfc8" 
                alt="Gucci" />
                <div className="overlay">
                  
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" onClick={() => selectDropdownItem('design-dropdown', 'Guess')} style={{cursor:'pointer'}}>
                <img width="100" height="100" 
                src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/202627.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5NzU4NzIwMCwicSI6bnVsbCwiaWF0IjoxNjk3MzgxODQ4fQ__.f1a11c9832a2d29c2dae1adc692497e76c0cc5ff9e7681757e7662bd747a6f6f" 
                alt="Guess" />
                <div className="overlay">
              
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" onClick={() => selectDropdownItem('design-dropdown', 'Lacoste')} style={{cursor:'pointer'}}>
                <img width="100" height="100" 
                src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/202631.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5NzU4NzIwMCwicSI6bnVsbCwiaWF0IjoxNjk3MzgxODQ4fQ__.5fcd66d0399565ac6cd000f2ece53942a01e13d408eabaa7a2ba9df04dc8d267" 
                alt="Lacoste" />
                <div className="overlay">
                  
                </div>
              </button>
            </Grid>
          </Grid>
          
            <br /><br />
            <Link to="/color">
            <Button container spacing={8} variant="outlined" size="meduim" disableElevation >
              BACK
            </Button>
            </Link>

            &nbsp;&nbsp;
  
            
            <Button container spacing={8} variant="contained"  size="meduim" disableElevation disabled={!brand || !barcode}>
            <Link to="/note" style={{ color: 'white'}}>
              Next
              </Link>
            </Button>
            
  
          </Box>
  
        </Box>
      </>
    );
  };
  
  export default Brand;
  
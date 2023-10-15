import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BarcodeScanner from './BarcodeScanner';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const drawerWidth = 240;

const Brand = () => {

    return (
      <>
  
          <Grid container spacing={3}>
              <Grid item xs={3}>
                <div className="circle"> </div>
              </Grid>
              <Grid item xs={3}>
              <div className="circle1"> </div>
              </Grid>
              <Grid item xs={3}>
              <div className="circle2"> </div>
              </Grid>
              <Grid item xs={3}>
              <div className="circle3"> </div>
              </Grid>
              <Grid item xs={3}>
              <div className="circle4"> </div>
              </Grid>
              <Grid item xs={3}>
              <div className="circle5"> </div>
              </Grid>
              <Grid item xs={3}>
              <div className="circle6"> </div>
              </Grid>
              <Grid item xs={3}>
              <div className="circle7"> </div>
              </Grid>
          </Grid>

  
            <br /><br /><br />

  


        
  
      </>
    );
  };
  
  export default Brand;
  
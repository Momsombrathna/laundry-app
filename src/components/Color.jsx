import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BarcodeScanner from './BarcodeScanner';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
const drawerWidth = 240;

const Home = () => {

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
  
            <Grid container spacing={12}>
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
            <Link to="/brand">
            <Button container spacing={8} variant="contained" endIcon={<ArrowForwardIcon />}  size="large" disableElevation>
              Next
            </Button>
            </Link>
          </Box>
  
        </Box>

        
  
      </>
    );
  };
  
  export default Home;
  
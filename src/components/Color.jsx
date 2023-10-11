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
  
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <div className="circle"> </div>
              </Grid>
              <Grid item xs={4}>
              <div className="circle"> </div>
              </Grid>
              <Grid item xs={4}>
              <div className="circle"> </div>
              </Grid>
              <Grid item xs={4}>
              <div className="circle"> </div>
              </Grid>
              <Grid item xs={4}>
              <div className="circle"> </div>
              </Grid>
              <Grid item xs={4}>
              <div className="circle"> </div>
              </Grid>
            </Grid>

  
            <br /><br /><br />
  
            <Button container spacing={8} variant="contained" endIcon={<ArrowForwardIcon />}  size="large" disableElevation>
              Next
            </Button>
  
          </Box>
  
        </Box>

        
  
      </>
    );
  };
  
  export default Home;
  
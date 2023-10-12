import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BarcodeScanner from './BarcodeScanner';
const drawerWidth = 240;
const Home = () => {
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
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box',backgroundColor: 'gray' },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
  
              <List>
  
                <BarcodeScanner />
  
              </List>
  
            </Box>
          </Drawer>
  
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
  
            <Grid container spacing={8}>
              <Grid item xs={4}>
              <div className="container" onClick={() => selectDropdownItem('design-dropdown', 'T-shirt')} style={{cursor:'pointer'}}>
              <img width="96" height="96" src="https://img.icons8.com/color/240/huion.png" alt="huion"/>
              <div class="overlay">
              <div class="text name">Unions</div>
              </div>
              </div>
              </Grid>
              <Grid item xs={4}>
              <div className="container" onClick={() => selectDropdownItem('design-dropdown', 'T-shirt')} style={{cursor:'pointer'}}>
              <img width="96" height="96" src="https://img.icons8.com/ios/250/gucci.png" alt="gucci"/>
              <div class="overlay">
              <div class="text name">Gucci</div>
              </div>
              </div>
              </Grid>
              <Grid item xs={4}>
              <div className="container" onClick={() => selectDropdownItem('design-dropdown', 'T-shirt')} style={{cursor:'pointer'}}>
              <img width="96" height="96" src="https://img.icons8.com/badges/240/nike.png" alt="nike"/>
              <div class="overlay">
              <div class="text name">Nike</div>
              </div>
              </div>
              </Grid>
              <Grid item xs={4}>
              <div className="container" onClick={() => selectDropdownItem('design-dropdown', 'T-shirt')} style={{cursor:'pointer'}}>
              <img width="96" height="96" src="https://img.icons8.com/ios-filled/250/adidas-trefoil.png" alt="adidas-trefoil"/>
              <div class="overlay">
              <div class="text name">Addidas</div>
              </div>
              </div>
              </Grid>
              <Grid item xs={4}>
              <div className="container" onClick={() => selectDropdownItem('design-dropdown', 'T-shirt')} style={{cursor:'pointer'}}>
              <img width="96" height="96" src="https://img.icons8.com/ios-filled/250/supreme.png" alt="supreme"/>
              <div class="overlay">
              <div class="text name">Supreme</div>
              </div>
              </div>
              </Grid>
              <Grid item xs={4}>
              <div className="container" onClick={() => selectDropdownItem('design-dropdown', 'T-shirt')} style={{cursor:'pointer'}}>
               <img width="100" height="100" src="https://img.icons8.com/color/240/h-and-m.png" alt="h-and-m"/>
               <div class="overlay">
              <div class="text name">H & M</div>
              </div>
              </div>
              </Grid>
            </Grid>
  
            <br /><br /><br />
            
            <Button container spacing={8} variant="contained"  size="large" disableElevation>
              Next
            </Button>
           
  
          </Box>
  
        </Box>
        </>
    );
};

export default Home;
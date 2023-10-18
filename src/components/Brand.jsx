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
                <br /><br />
                <ShowRecorde />
  
              </List>
  
            </Box>
          </Drawer>
  
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
  
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <button className="container" onClick={() => selectDropdownItem('design-dropdown', 'Adidas')} style={{cursor:'pointer'}}>
                <img width="100" height="100" 
                src="https://dl.dropboxusercontent.com/scl/fi/xi244oma2efieq7yyvt2l/pngwing.com.png?rlkey=x0tvhm0399f9xywd3dfrtnw07&dl=0"
                alt="Adidas" />
                <div className="overlay">
      
                </div>
              </button>
            
            </Grid>
            <Grid item xs={4}>
              <button className="container" onClick={() => selectDropdownItem('design-dropdown', 'Levis')} style={{cursor:'pointer'}}>
                <img width="100" height="100" 
                src="https://dl.dropboxusercontent.com/scl/fi/womla9yfcu45dgbobrmhu/pngwing.com-1.png?rlkey=vkygdh0vzm6cr0ww1hfof448t&dl=0" 
                alt="Levi's" style={{ cursor: 'pointer' }} />
                <div className="overlay">
      
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" onClick={() => selectDropdownItem('design-dropdown', 'Calvin klein')} style={{cursor:'pointer'}}>
                <img width="100" height="100" 
                src="https://dl.dropboxusercontent.com/scl/fi/1ixwjhvb4rv4u2i9d89ga/pngwing.com-2.png?rlkey=tsk3ub7nm45h8vyhlh9fhp8rt&dl=0" 
                alt="Calvin klein" />
                <div className="overlay">
                  
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" onClick={() => selectDropdownItem('design-dropdown', 'Gucci')} style={{cursor:'pointer'}}>
                <img width="100" height="100" 
                src="https://dl.dropboxusercontent.com/scl/fi/tyb7xsc0mlu2whfvjdiya/pngwing.com-3.png?rlkey=l6k0i2vfwwy3mn9o2bbcrsafs&dl=0" 
                alt="Gucci" />
                <div className="overlay">
                  
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" onClick={() => selectDropdownItem('design-dropdown', 'Guess')} style={{cursor:'pointer'}}>
                <img width="100" height="100" 
                src="https://dl.dropboxusercontent.com/scl/fi/44b18a59aneexy5nj72cm/pngwing.com-4.png?rlkey=syzg8m9982d2pbpa8bfdn1qiw&dl=0" 
                alt="Guess" />
                <div className="overlay">
              
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" onClick={() => selectDropdownItem('design-dropdown', 'Lacoste')} style={{cursor:'pointer'}}>
                <img width="120" height="100" 
                src="https://dl.dropboxusercontent.com/scl/fi/gumqhj6akh0h490zicddi/pngwing.com-5.png?rlkey=22qltrq3ibamyoy7iufswrekv&dl=0" 
                alt="Lacoste" />
                <div className="overlay">
                  
                </div>
              </button>
            </Grid>
          </Grid>
          
            <br /><br />
            <Link to="/">
            <Button container spacing={8} variant="outlined" size="meduim" disableElevation >
              BACK
            </Button>
            </Link>

            &nbsp;&nbsp;
  
            
            <Button container spacing={8} variant="contained"  size="meduim" disableElevation disabled={!brand || !barcode}>
            <Link to="/color" style={{ color: 'white'}}>
              Next
              </Link>
            </Button>
            
  
          </Box>
  
        </Box>
      </>
    );
  };
  
  export default Brand;
  
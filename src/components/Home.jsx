import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

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
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>

            <List>

                
               
            </List>
            
          
            </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            
            
            <Grid container spacing={8}>
            <Grid item xs={4}>
                <img width="96" height="96" src="https://img.icons8.com/fluency/96/polo-shirt.png" alt="polo-shirt"/>
            </Grid>
            <Grid item xs={4}>
                <img width="96" height="96" src="https://img.icons8.com/color/96/shirt.png" alt="shirt"/>
            </Grid>
            <Grid item xs={4}>
                <img width="100" height="100" src="https://img.icons8.com/plasticine/100/jeans.png" alt="jeans"/>
            </Grid>
            <Grid item xs={4}>
                <img width="96" height="96" src="https://img.icons8.com/emoji/96/dress.png" alt="dress"/>
            </Grid>
            <Grid item xs={4}>
                <img width="96" height="96" src="https://img.icons8.com/color/96/denim-shorts.png" alt="denim-shorts"/>
            </Grid>
            <Grid item xs={4}>
                <img width="100" height="100" src="https://img.icons8.com/plasticine/100/suit.png" alt="suit"/>
            </Grid>
            </Grid>

            <br /><br /><br />

            
            <Button container spacing={8} variant="contained"  size="large" disableElevation>
            Next
            </Button>
        

            

        </Box>
        
        </Box>
        
        
        </>
    );
};

export default Home;
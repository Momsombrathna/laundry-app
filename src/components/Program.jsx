import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import ShowRecorde from './ShowRecorde';

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BarcodeScanner from './BarcodeScanner';





const Program = () => {
    const drawerWidth = 240;
    

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
    
            
            






                <br /><br />
                <Link to="/color">
                <Button container spacing={8} variant="outlined" size="meduim" disableElevation >
                BACK
                </Button>
                </Link>

                &nbsp;&nbsp;
    
                
                <Button container spacing={8} variant="contained"  size="meduim" disableElevation>
                <Link to="/note" style={{ color: 'white'}}>
                Next
                </Link>
                </Button>
                
    
            </Box>
    
            </Box>
        </>
    );
};

export default Program;
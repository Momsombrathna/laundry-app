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
    
            {/* <div class="title">
                <h1>Program</h1>
            </div> */}


           
            <p class="program-title" >Programs Category</p>
            
            <Grid container direction="row" spacing="5px">
                <Grid item>
                    <input type="checkbox"  id="laundry" />
                    <label for="laundry" class="md-chip md-chip-clickable md-chip-hover"> Laundry </label>
                </Grid>
                <Grid item>
                    <input type="checkbox"  id="wetCleaning"/> 
                    <label for="wetCleaning" class="md-chip md-chip-clickable md-chip-hover"> Wet Cleaning</label>
                </Grid>
                <Grid item>
                    <input type="checkbox"  id="dryCleaning"/> 
                    <label for="dryCleaning" class="md-chip md-chip-clickable md-chip-hover"> Dry Cleaning</label>
                </Grid>
                <Grid item>
                    <input type="checkbox"  id="handCleaning"/> 
                    <label for="handCleaning" class="md-chip md-chip-clickable md-chip-hover"> Hand Cleaning</label>
                </Grid>
            </Grid>


            <br /><br />
            
            
            <p class="program-title" >Programs</p>
            
            <Grid container direction="row" spacing="5px">
                <Grid item>
                    <input type="checkbox"  id="p-color" />
                    <label for="p-color" class="md-chip md-chip-clickable md-chip-hover"> Pillow Colors</label>
                </Grid>
                <Grid item>
                    <Grid  direction="col">
                        <Grid item>
                            <input type="checkbox"  id="colors"/> 
                            <label for="colors" class="md-chip md-chip-clickable md-chip-hover"> Colors </label>
                        </Grid>
                        <Grid item sx={{ marginTop: 1 }}>
                            <input type="checkbox"  id="s-colors"/> 
                            <label for="s-colors" class="md-chip md-chip-clickable md-chip-hover"> Sensitive Colors </label>
                        </Grid>
                        <Grid item sx={{ marginTop: 1 }}>
                            <input type="checkbox"  id="silk-color"/> 
                            <label for="silk-color" class="md-chip md-chip-clickable md-chip-hover"> Silk Colors </label>
                        </Grid>
                        <Grid item sx={{ marginTop: 1 }}>
                            <input type="checkbox"  id="s-d-colors"/> 
                            <label for="s-d-colors" class="md-chip md-chip-clickable md-chip-hover"> Silk Dark Colors </label>
                        </Grid>
                        <Grid item sx={{ marginTop: 1 }}>
                            <input type="checkbox"  id="l-d-colors"/> 
                            <label for="l-d-colors" class="md-chip md-chip-clickable md-chip-hover"> Leather Dark Colors </label>
                        </Grid>
                        <Grid item sx={{ marginTop: 1 }}>
                            <input type="checkbox"  id="l-colors"/> 
                            <label for="l-colors" class="md-chip md-chip-clickable md-chip-hover">Leather Colors</label>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <input type="checkbox"  id="d-Cleaning"/> 
                    <label for="d-Cleaning" class="md-chip md-chip-clickable md-chip-hover"> Dry Cleaning</label>
                </Grid>
                <Grid item>
                    <input type="checkbox"   id="h-Cleaning"/> 
                    <label for="h-Cleaning" class="md-chip md-chip-clickable md-chip-hover"> Hand Cleaning</label>
                </Grid>
            </Grid>

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
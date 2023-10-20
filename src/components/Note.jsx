//import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
//import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
//import { toast } from 'react-toastify';
import { toast } from 'react-toastify';
import List from '@mui/material/List';
//import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BarcodeScanner from './BarcodeScanner';
//import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNote } from '../redux/slices/appSlice';
import ShowRecorde from './ShowRecorde';
import { addItem } from '../redux/slices/dataSlice';


const drawerWidth = 240;

const Note = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const barcode = state.sliceItems.barcode;
  const type = state.sliceItems.type;
  const color = state.sliceItems.color;
  const brand = state.sliceItems.brand;
  const note = state.sliceItems.note;

  // useEffect(()=>{
  //   createCollectionsIndexedDB();
  // }, []);

  

  const addDatas = () => {
      dispatch(addItem({barcode, type, color, brand, note,}));
      toast.success('Data added successfully');
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
                <br />
                <ShowRecorde />
  
              </List>
  
            </Box>
          </Drawer>

          <h2>Note</h2>
  
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <textarea name="" style={{backgroundColor: 'white', color: 'black', width: '500px'}} id="" cols="30" rows="10"
                onChange={(e) =>dispatch(setNote(e.target.value))}>{note}</textarea>

  
            <br /><br /><br />
            <Link to="/brand">
            <Button container spacing={8} variant="outlined" size="meduim" disableElevation >
              BACK
            </Button>
            </Link>

            &nbsp;&nbsp;
  
            <Link to="/">
              <Button container spacing={8} variant="contained"  size="meduim" disableElevation onClick={addDatas}>
                save
              </Button>
            </Link>
  
          </Box>
        </Box>

  
      </>
    );
  };
  
  export default Note;
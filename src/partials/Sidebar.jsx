import React from 'react';
import { Box } from '@mui/material';
import BarcodeScanner from '../components/BarcodeScanner';

const Sidebar = () => {
  return (
    <Box sx={{
      position: 'fixed',
      width: '300px',
      top: 0,
      left: 0,
      bottom: 0,
      backgroundColor: '#cccccc',
    }}>

        <BarcodeScanner />
      
    </Box>
  );
};

export default Sidebar;

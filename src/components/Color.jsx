import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Color = ({ onItemSelection }) => {
  const handleColorSelection = (color) => {
    onItemSelection(color);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <button className="circle" onClick={() => handleColorSelection('#F9DEC9')}></button>
        </Grid>
        <Grid item xs={3}>
          <button className="circle1" onClick={() => handleColorSelection('#37E2D5')}></button>
        </Grid>
        <Grid item xs={3}>
          <button className="circle2" onClick={() => handleColorSelection('#ffff99')}></button>
        </Grid>
        <Grid item xs={3}>
          <button className="circle3" onClick={() => handleColorSelection('#cc0066')}></button>
        </Grid>
        <Grid item xs={3}>
          <button className="circle4" onClick={() => handleColorSelection('#0099ff')}></button>
        </Grid>
        <Grid item xs={3}>
          <button className="circle5" onClick={() => handleColorSelection('#ff99cc')}></button>
        </Grid>
        <Grid item xs={3}>
          <button className="circle6" onClick={() => handleColorSelection('#ff6600')}></button>
        </Grid>
        <Grid item xs={3}>
         
          <button className="circle7" onClick={() => handleColorSelection('#993399')}></button>
        </Grid>
      </Grid>

      <br /><br /><br />
    </>
  );
};

export default Color;
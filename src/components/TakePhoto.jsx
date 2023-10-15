import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const drawerWidth = 240;

const TakePhoto = () => {

    return (
      <>
        <Grid container spacing={3}>
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
  
  
      </>
    );
  };
  
  export default TakePhoto;
  
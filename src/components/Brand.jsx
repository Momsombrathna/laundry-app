import * as React from 'react';
import Grid from '@mui/material/Grid';


const Brand = ({ onItemSelection }) => {

  const handleItemSelect = (item) => {
    onItemSelection(item);
  };

    return (
      <>
  
  <Grid container spacing={2}>
            <Grid item xs={4}>
              <button className="container" style={{ cursor: 'pointer' }} onClick={() => handleItemSelect('Aiddas')}>
                <img width="100" height="100" 
                src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/202714.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5NzU4NzIwMCwicSI6bnVsbCwiaWF0IjoxNjk3MzgxODQ3fQ__.afffdfb4213d931ace7406817d5053992d79531b07f5806c81e21194bb464386"
                alt="polo-shirt" />
                <div className="overlay">
      
                </div>
              </button>
            
            </Grid>
            <Grid item xs={4}>
              <button className="container" style={{ cursor: 'pointer' }} onClick={() => handleItemSelect('Levis')}>
                <img width="100" height="100" 
                src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/202644.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5NzU4NzIwMCwicSI6bnVsbCwiaWF0IjoxNjk3MzgxODQ3fQ__.56ec4dfe9b09ac10b8f507b5ffce94f484562809c22be59e98a047fc8c5f7d5e" 
                alt="Levi's" style={{ cursor: 'pointer' }} />
                <div className="overlay">
      
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" style={{ cursor: 'pointer' }} onClick={() => handleItemSelect('Calvin klein')}>
                <img width="100" height="100" 
                src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/202551.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5NzU4NzIwMCwicSI6bnVsbCwiaWF0IjoxNjk3MzgxODQ3fQ__.060294b56abed9e3baa76e6d85778f432e4d9dd19379f2e446ed4bc032e1bbce" 
                alt="Calvin klein" />
                <div className="overlay">
                  
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" style={{ cursor: 'pointer' }} onClick={() => handleItemSelect('Gucci')}>
                <img width="100" height="100" 
                src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/202607.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5NzU4NzIwMCwicSI6bnVsbCwiaWF0IjoxNjk3MzgxODQ4fQ__.b38b05790e6c8e7d786170b9d8c8e3dae8552b228ace1273496451d217e8dfc8" 
                alt="Gucci" />
                <div className="overlay">
                  
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" style={{ cursor: 'pointer' }} onClick={() => handleItemSelect('Guess')}>
                <img width="100" height="100" 
                src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/202627.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5NzU4NzIwMCwicSI6bnVsbCwiaWF0IjoxNjk3MzgxODQ4fQ__.f1a11c9832a2d29c2dae1adc692497e76c0cc5ff9e7681757e7662bd747a6f6f" 
                alt="Guess" />
                <div className="overlay">
              
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" style={{ cursor: 'pointer' }} onClick={() => handleItemSelect('Lacoste')}>
                <img width="100" height="100" 
                src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/202631.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5NzU4NzIwMCwicSI6bnVsbCwiaWF0IjoxNjk3MzgxODQ4fQ__.5fcd66d0399565ac6cd000f2ece53942a01e13d408eabaa7a2ba9df04dc8d267" 
                alt="Lacoste" />
                <div className="overlay">
                  <div className="text name">Suit</div>
                </div>
              </button>
            </Grid>
          </Grid>


            <br /><br /><br /> 
      </>
    );
  };
  
  export default Brand;
  

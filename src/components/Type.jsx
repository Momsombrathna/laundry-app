import React from 'react';
import Grid from '@mui/material/Grid';


const Cloth = ({ onItemSelection }) => {

  const handleItemSelect = (item) => {
    onItemSelection(item);
  };

    return (
        <>

        <Grid container spacing={4}>
            <Grid item xs={4}>
              <button className="container" style={{ cursor: 'pointer' }} onClick={() => handleItemSelect('T-shirt')}>
                <img width="96" height="96" src="https://img.icons8.com/fluency/96/polo-shirt.png" alt="polo-shirt" />
                <div className="overlay">
                  <div className="text name">T-shirt</div>
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" onClick={() => handleItemSelect('Shirt')}>
                <img width="96" height="96" src="https://img.icons8.com/color/96/shirt.png" alt="shirt" style={{ cursor: 'pointer' }} />
                <div className="overlay">
                  <div className="text name">Shirt</div>
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" style={{ cursor: 'pointer' }} onClick={() => handleItemSelect('Jeans')}>
                <img width="100" height="100" src="https://img.icons8.com/plasticine/100/jeans.png" alt="jeans" />
                <div className="overlay">
                  <div className="text name">Jeans</div>
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" style={{ cursor: 'pointer' }} onClick={() => handleItemSelect('Dress')}>
                <img width="96" height="96" src="https://img.icons8.com/emoji/96/dress.png" alt="dress" />
                <div className="overlay">
                  <div className="text name">Dress</div>
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" style={{ cursor: 'pointer' }} onClick={() => handleItemSelect('Denim Shorts')}>
                <img width="96" height="96" src="https://img.icons8.com/color/96/denim-shorts.png" alt="denim-shorts" />
                <div className="overlay">
                  <div className="text name">Denim Shorts</div>
                </div>
              </button>
            </Grid>
            <Grid item xs={4}>
              <button className="container" style={{ cursor: 'pointer' }} onClick={() => handleItemSelect('Suit')}>
                <img width="100" height="100" src="https://img.icons8.com/plasticine/100/suit.png" alt="suit" />
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

export default Type;
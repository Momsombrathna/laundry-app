import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';




const Cloth = () => {
    return (
        <>
        {/* <Grid container spacing={4}>
              <Grid item xs={4}>
                  <div className="container" onClick={() => selectDropdownItem('design-dropdown', 'T-shirt')} style={{cursor:'pointer'}}>
                    <img width="96" height="96" src="https://img.icons8.com/fluency/96/polo-shirt.png" alt="polo-shirt"  
                     />
                    <div class="overlay">
                      <div class="text name">T-shirt</div>
                    </div>
                  </div>              
              </Grid>
              <Grid item xs={4}>
                  <div class="container">
                    <img width="96" height="96" src="https://img.icons8.com/color/96/shirt.png" alt="shirt"
                     onClick={() => selectDropdownItem('design-dropdown', 'Shirt')} style={{cursor:'pointer'}}/>
                     <div class="overlay">
                      <div class="text name">Shirt</div>
                    </div>
                  </div>
              </Grid>
              <Grid item xs={4}>
                  <div class="container" onClick={() => selectDropdownItem('design-dropdown', 'Jeans')} style={{cursor:'pointer'}}>
                    <img width="100" height="100" src="https://img.icons8.com/plasticine/100/jeans.png" alt="jeans"
                     /> 
                     <div class="overlay">
                      <div class="text name">Jeans</div>
                    </div> 
                  </div>
              </Grid>
              <Grid item xs={4}>
                <div class="container" onClick={() => selectDropdownItem('design-dropdown', 'Dress')} style={{cursor:'pointer'}}>
                  <img width="96" height="96" src="https://img.icons8.com/emoji/96/dress.png" alt="dress"
                     />
                     <div class="overlay">
                      <div class="text name">Dress</div>
                    </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div class="container" onClick={() => selectDropdownItem('design-dropdown', 'Demin Shorts')} style={{cursor:'pointer'}}>
                <img width="96" height="96" src="https://img.icons8.com/color/96/denim-shorts.png" alt="denim-shorts"
                     />
                     <div class="overlay">
                      <div class="text name">Denim Shorts</div>
                    </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div class="container" onClick={() => selectDropdownItem('design-dropdown', 'Suit')} style={{cursor:'pointer'}}>
                <img width="100" height="100" src="https://img.icons8.com/plasticine/100/suit.png" alt="suit"
                     />
                     <div class="overlay">
                      <div class="text name">Suit</div>
                    </div>
                </div>
              </Grid>
            </Grid>
  
            <br /><br /><br />
            
            <select id="design-dropdown" value={type} onChange={(e) => setType(e.target.value)} style={{display:'none'}}>
              <option>Select here or click a pattern above.</option>
              <option value="T-shirt">T-shirt</option>
              <option value="Shirt">Shirt</option>
              <option value="Jeans">Jeans</option>
              <option value="Demin">Demin</option>
              <option value="Shorts">Shorts</option>
              <option value="Suit">Suit</option>
            </select>
  
          
            <Button container spacing={8} variant="contained" size="large" disableElevation onClick={handleSubmit}>
              Next
            </Button> */}

        <Grid container spacing={4}>
              <Grid item xs={4}>
                  <div className="container" style={{cursor:'pointer'}}>
                    <img width="96" height="96" src="https://img.icons8.com/fluency/96/polo-shirt.png" alt="polo-shirt"  
                     />
                    <div class="overlay">
                      <div class="text name">T-shirt</div>
                    </div>
                  </div>              
              </Grid>
              <Grid item xs={4}>
                  <div class="container">
                    <img width="96" height="96" src="https://img.icons8.com/color/96/shirt.png" alt="shirt"
                      style={{cursor:'pointer'}}/>
                     <div class="overlay">
                      <div class="text name">Shirt</div>
                    </div>
                  </div>
              </Grid>
              <Grid item xs={4}>
                  <div class="container" style={{cursor:'pointer'}}>
                    <img width="100" height="100" src="https://img.icons8.com/plasticine/100/jeans.png" alt="jeans"
                     /> 
                     <div class="overlay">
                      <div class="text name">Jeans</div>
                    </div> 
                  </div>
              </Grid>
              <Grid item xs={4}>
                <div class="container" style={{cursor:'pointer'}}>
                  <img width="96" height="96" src="https://img.icons8.com/emoji/96/dress.png" alt="dress"
                     />
                     <div class="overlay">
                      <div class="text name">Dress</div>
                    </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div class="container"  style={{cursor:'pointer'}}>
                <img width="96" height="96" src="https://img.icons8.com/color/96/denim-shorts.png" alt="denim-shorts"
                     />
                     <div class="overlay">
                      <div class="text name">Denim Shorts</div>
                    </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div class="container" style={{cursor:'pointer'}}>
                <img width="100" height="100" src="https://img.icons8.com/plasticine/100/suit.png" alt="suit"
                     />
                     <div class="overlay">
                      <div class="text name">Suit</div>
                    </div>
                </div>
              </Grid>
            </Grid>
  
            <br /><br /><br />
            

  

        </>
    );
};

export default Cloth;
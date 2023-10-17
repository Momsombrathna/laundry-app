import React from 'react';
import Button from '@mui/material/Button';


const ShowRecorde = () => {
    return (
        <>
           <textarea name="" 
           style={{backgroundColor: 'LightGray', 
           color: 'black', height: '350px', width: '230px',
           padding: '10px',
           border: 'none', outline: 'none',}} 
           id="">
           </textarea>

           <br /><br />

           <Button variant="contained">Submit</Button>

        </>
    );
};

export default ShowRecorde;
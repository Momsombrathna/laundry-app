import React from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const ShowRecorde = () => {
    return (
        <>


           <List style={{backgroundColor: 'LightGray', 
                color: 'black', height: '350px', width: '230px',
                padding: '5px',
                margin: 'auto',
                border: 'none',
                outline: 'none',
                borderRadius: '5px',
                overflow: 'auto'}}
                sx={{ padding: 0 }}>

                <ListItem sx={{ padding: '4px 16px', 
                    border: '1px solid gray', 
                    borderRadius: '5px', 
                    marginTop: '2px'}}>
                    <ListItemText primary="0757836764" />
                </ListItem>
                <ListItem sx={{ padding: '4px 16px', 
                    border: '1px solid gray', 
                    borderRadius: '5px', 
                    marginTop: '2px'}}>
                    <ListItemText primary="0757836764" />
                </ListItem>
                <ListItem sx={{ padding: '4px 16px', 
                    border: '1px solid gray', 
                    borderRadius: '5px', 
                    marginTop: '2px'}}>
                    <ListItemText primary="0757836764" />
                </ListItem>
                <ListItem sx={{ padding: '4px 16px',
                    border: '1px solid gray', 
                    borderRadius: '5px', 
                    marginTop: '2px'}}>
                    <ListItemText primary="0757836764" />
                </ListItem>
                <ListItem sx={{ padding: '4px 16px', 
                    border: '1px solid gray', 
                    borderRadius: '5px', 
                    marginTop: '2px'}}>
                    <ListItemText primary="0757836764" />
                </ListItem>

                <ListItem sx={{ padding: '4px 16px', 
                    border: '1px solid gray', 
                    borderRadius: '5px', 
                    marginTop: '2px'}}>
                    <ListItemText primary="0757836764" />
                </ListItem>
                <ListItem sx={{ padding: '4px 16px', 
                    border: '1px solid gray', 
                    borderRadius: '5px', 
                    marginTop: '2px'}}>
                    <ListItemText primary="0757836764" />
                </ListItem>
                <ListItem sx={{ padding: '4px 16px', 
                    border: '1px solid gray', 
                    borderRadius: '5px', 
                    marginTop: '2px'}}>
                    <ListItemText primary="0757836764" />
                </ListItem>
                <ListItem sx={{ padding: '4px 16px',
                    border: '1px solid gray', 
                    borderRadius: '5px', 
                    marginTop: '2px'}}>
                    <ListItemText primary="0757836764" />
                </ListItem>
                <ListItem sx={{ padding: '4px 16px', 
                    border: '1px solid gray', 
                    borderRadius: '5px', 
                    marginTop: '2px'}}>
                    <ListItemText primary="0757836764" />
                </ListItem>


                


            </List>


           <br />

           <Button variant="contained">Submit</Button>

        </>
    );
};

export default ShowRecorde;
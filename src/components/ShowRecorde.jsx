import React from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useEffect } from 'react';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

//Get Data
const fetchDataFromIndexedDB = () => {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open("laundry", 2);

        request.onerror = (event) => {
            reject('Error opening the database');
            console.log(event);
        };

        request.onsuccess = (event) => {
            const db = event.target.result;
            var transaction = db.transaction("items", "readwrite");
            var store = transaction.objectStore("items");

            const getDataRequest = store.getAll();

            getDataRequest.onsuccess = (event) => {
                const data = event.target.result;
                resolve(data);
              };
        
            getDataRequest.onerror = (event) => {
                reject('Error fetching data from IndexedDB');
                console.log(event);
            };
    
            transaction.oncomplete = () => {
                db.close();
            };
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            db.createObjectStore("items",{keyPath:"id", autoIncrement:true});
        };

    });
}

    const ShowRecorde = () => {
        const [data, setData] = useState([]);

        useEffect(()=>{
        fetchDataFromIndexedDB()
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error(error);
            });
        }, []);

    const [hovered, setHovered] = React.useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };

    return (
        <>


           <List style={{backgroundColor: 'LightGray', 
                color: 'black', height: '320px', width: '230px',
                padding: '5px',
                margin: 'auto',
                border: 'none',
                outline: 'none',
                borderRadius: '5px',
                overflow: 'auto'}}
                sx={{ padding: 0 }}>
                 {data.map((item) =>
                <ListItem sx={{ padding: '4px 16px', 
                    border: '1px solid gray', 
                    borderRadius: '5px', 
                    marginTop: '2px'}}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} 
                    key={item.id}>
                    <ListItemText  primary={item.id} />
                   
                        

                        <IconButton
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            color={hovered ? 'primary' : 'inherit'}
                            >
                            <ClearIcon />
                        </IconButton>
                    
                </ListItem>
                )}
                {/* <ListItem sx={{ padding: '4px 16px', 
                    border: '1px solid gray', 
                    borderRadius: '5px', 
                    marginTop: '2px'}}>
                    <ListItemText primary="0757836764" />
                </ListItem>
                */}
                
            </List>


           <br />

           <Button variant="contained">Submit</Button>

        </>
    );
};

export default ShowRecorde;
import React from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useEffect } from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
// Import the react-swipe-to-delete-component
import SwipeToDelete from 'react-swipe-to-delete-component';
// Import styles of the react-swipe-to-delete-component
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';


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



    return (
        <>


           <List style={{backgroundColor: 'white', 
                color: 'black', height: '300px', width: '230px',
                padding: '5px',
                margin: 'auto',
                border: 'none',
                outline: 'none',
                borderRadius: '5px',
                overflow: 'auto'}}
                sx={{ padding: 0 }}>

                {data.map((item) =>
                    <div >
                        <SwipeToDelete class="line"  key={item.id}>
                        <div style={{ 
                            backgroundColor: 'white',
                            color: 'black',
                            height: 'full',
                            borderColor: 'black',
                            outline: 'none',
                            overflow: 'auto',
                            borderStyle: 'dotted',
                            borderWidth: '1px',
                        }}>
                            <a className="list-group-item">
                                <h4 className="list-group-item-heading">{item.date}</h4>
                                <p style={{
                                    fontSize: '15px',
                                    color: 'black',
                                }} className="list-group-item-text">{item.id}</p>
                            </a>
                            
                        </div>
                        
                        </SwipeToDelete>
                    </div>
                )}
              
                
            </List>


           <br />

           <Button variant="contained">Submit</Button>

        </>
    );
};

export default ShowRecorde;
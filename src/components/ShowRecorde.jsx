import React, { useState } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
//import { useEffect } from 'react';
//import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { store } from '../redux/store/store';
import { useDispatch} from 'react-redux';
import { deleteItems } from '../redux/slices/dataSlice';
import { render } from 'react-dom';
// Import the react-swipe-to-delete-component
import SwipeToDelete from 'react-swipe-to-delete-component';
// Import styles of the react-swipe-to-delete-component
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';


    const idb =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

    const createCollectionsIndexedDB = () => {
        //check for support
        if (!idb) {
            console.log("This browser doesn't support IndexedDB");
            return;
        }

        var request = indexedDB.open("laundry", 1);
        request.onupgradeneeded = () => {
            //var db = event.target.result;
            var db = request.result;
            db.createObjectStore("items",{keyPath:"id", autoIncrement:true});
            // document.write("Object store Created Successfully...");
        };

        request.onsuccess = function () {
            console.log("Database opened successfully");
        };

    }


    const ShowRecorde = () => {   
        const dispatch = useDispatch();
    
        const [dataItems, setDataItems] = useState([])

        useEffect(() => {
            createCollectionsIndexedDB();

            const storedDataItems = localStorage.getItem('dataItems');
            if (storedDataItems) {
                setDataItems(JSON.parse(storedDataItems));
            }  

        }, []);


        // sort dat by id in descending order
        const numDescending = [...dataItems].sort((a, b) => b.id - a.id);
        console.log(numDescending);
       
        // const [hovered, setHovered] = React.useState(false);

        // const handleMouseEnter = () => {
        // setHovered(true);
        // };
    
        // const handleMouseLeave = () => {
        // setHovered(false);
        // };

        const handleSubmit = () => {
            const allDatas = store.getState().data.dataItems;
            const dbPromise = idb.open("laundry", 1);
            if(allDatas){
                dbPromise.onsuccess = () => {
                    const db = dbPromise.result;
        
                    var tx = db.transaction("items", "readwrite");
                    var store = tx.objectStore("items");                    
                    var items;

                    allDatas.forEach((data) => {
                        items = store.put(data);

                        items.onerror = (event) => {
                            console.log(event);
                            alert("Error occur");
                        }
                    });

                    items.onsuccess = () => {
                        tx.oncomplete = function () {
                            window.location.reload();
                            localStorage.removeItem('dataItems');
                            toast.success('Items added successfully');
                            db.close();
                        };
                    }
                   
                }
            }
        }
        

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
            
                 {numDescending.map((data) =>
                <SwipeToDelete sx={{ padding: '4px 16px', 
                    border: '1px solid gray', 
                    borderRadius: '5px', 
                    marginTop: '2px'}}
                    key={data.id}>
                    {/* <ListItemText  primary={data.barcode} /> */}
                        {/* <IconButton onClick={()=>dispatch(deleteItems(data.id))}
                            // onMouseEnter={handleMouseEnter}
                            // onMouseLeave={handleMouseLeave}
                            // color={hovered ? 'primary' : 'inherit'}
                            >
                            
                        </IconButton> */}
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
                            {/* <h4 className="list-group-item-heading">{data.dataItems}</h4> */}
                            <p style={{
                                fontSize: '15px',
                                color: 'black',
                            }} className="list-group-item-text">{data.barcode}</p>
                        </a>
                    </div> 
                    
                </SwipeToDelete>
                )}

                

                {/* <ListItem sx={{ padding: '4px 16px', 
                    border: '1px solid gray', 
                    borderRadius: '5px', 
                    marginTop: '2px'}}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} 
                    >
                    <ListItemText primary="0757836764" />
                    <IconButton
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            color={hovered ? 'primary' : 'inherit'}
                            >
                            <ClearIcon />
                    </IconButton>
                </ListItem> */}
               
                
            </List>


           <br />           
           <Button variant="contained" onClick={handleSubmit}>Submit</Button>

        </>
    );
};

export default ShowRecorde;
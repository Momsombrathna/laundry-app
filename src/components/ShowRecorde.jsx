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
            
                 {dataItems.map((data) =>
                <ListItem sx={{ padding: '4px 16px', 
                    border: '1px solid gray', 
                    borderRadius: '5px', 
                    marginTop: '2px'}}
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave} 
                    key={data.id}>
                    <ListItemText  primary={data.barcode} />
                        <IconButton onClick={()=>dispatch(deleteItems(data.id))}
                            // onMouseEnter={handleMouseEnter}
                            // onMouseLeave={handleMouseLeave}
                            // color={hovered ? 'primary' : 'inherit'}
                            >
                            <ClearIcon />
                        </IconButton>
                    
                </ListItem>
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
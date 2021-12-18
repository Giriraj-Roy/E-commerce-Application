import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {

    const [ items, setItems] = useState([]);

    useEffect( () => {
        const fetchItems = async ()=> {
            const result = await axios('https://fakestoreapi.com/products');
            setItems(result.data)
            console.log(result.data)
        }
        fetchItems()        
    },[])

    return (
        <div>

        </div>
    )
}

export default Home

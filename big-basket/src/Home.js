import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';


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
        <div className="cards">
            { items.map( item => (
                <Product key={items.id} item={item} />
            ))
            }            
        </div>
    )
}

export default Home

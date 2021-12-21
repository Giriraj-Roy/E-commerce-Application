import React, { useState, useEffect } from 'react';
import axios from 'axios';

const index = () => {

    const [categories, setCategories]= useState([])

    useEffect( () => {
        const fetchCategories = async () => {
            const result = await axios('https://fakestoreapi.com/products/categories')
            setCategories(result.data);
            console.log(result.data)
        }
        fetchCategories()
        
    },[])

    return (

        <div>
            {   categories.map( category => (
                    <ul>
                        <li>{category}</li>
                    </ul> 
                ))
            }
        </div>
    )
}

export default index

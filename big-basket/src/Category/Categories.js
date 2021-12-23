import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ShowCategories from './ShowCategories';
// import styled from 'styled-components';

const Categories = () => {

    const [ category, setCategory ] = useState([]);

    useEffect( () => {
        const fetchCategories = async () =>{
            const res = await axios('https://fakestoreapi.com/products/categories')
            setCategory(res.data);
            console.log(res.data);
        }
        fetchCategories();
    }, [])

    return (
        <div>
            <>
                <h1> <strong>Welcome to explore our <span>CATEGORIES</span></strong> </h1>
            </>
            <div>
                {category.map( ele => (
                    <ShowCategories key={ele._id} ele={ele}/>
                ))}
                    
            </div>
        </div>
    )
}

export default Categories

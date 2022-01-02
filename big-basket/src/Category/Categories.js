import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../loader/Loading';
import ShowCategories from './ShowCategories';
// import styled from 'styled-components';

const Categories = () => {

    const [ category, setCategory ] = useState([]);
    const [ loading , setLoading ] = useState(true);

    useEffect( () => {
        const fetchCategories = async () =>{
            const res = await axios('https://fakestoreapi.com/products/categories')
            setCategory(res.data);
            console.log(res.data);
            setLoading(false);
        }
        fetchCategories();
    }, [])

    return (
        <div>
            <>
                <div className='mycontainer'> <span style={{ justifyContent: "center", fontSize: "30px"}}>Welcome to explore our <span>CATEGORIES</span></span> </div>
            </>
            <div>
                { loading ? <Loading/> : category.map( ele => (
                    <ShowCategories key={ele._id} ele={ele}/>
                ))}
                    
            </div>
        </div>
    )
}

export default Categories

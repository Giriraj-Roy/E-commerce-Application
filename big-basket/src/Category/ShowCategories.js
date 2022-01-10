import React, { useEffect, useState } from 'react';
import './ShowCategories.css';
import {Link, /*useParams*/} from 'react-router-dom';
import axios from 'axios';
import ShowProducts from './ShowProducts';

const ShowCategories = ( {key, ele}) => {

    // const { category } = useParams();

    const [ items, setItems] = useState([]);
    // const [ loading , setLoading ] = useState(true);

    useEffect( () => {
        const fetchItems = async ()=> {
            const result = await axios(`https://fakestoreapi.com/products/category/${ele}`);
            setItems(result.data)
            console.log(result.data)
            // setLoading(false);
        }
        fetchItems()        
    },[ele])


    return (
        <div id={key} className='category'>
            <div className='box'>
                
                <Link to={{pathname: `/categories/${ele}`}} style={{color: "black",textDecoration: "none"}}>{ele}</Link>
            </div>

            <Link to={{pathname: `/categories/${ele}`}} style={{color: "black",textDecoration: "none"}}><span className='seeMore'>See More</span></Link>
            {items.map( item => (
                <ShowProducts key={items.id} item={item} />
            ))}            
        </div>
    )
}

export default ShowCategories

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../loader/Loading';
import Product from '../Product';

const Category = () => {

    const { category } = useParams();

    const [ items, setItems] = useState([]);
    const [ loading , setLoading ] = useState(true);

    useEffect( () => {
        const fetchItems = async ()=> {
            const result = await axios(`https://fakestoreapi.com/products/category/${category}`);
            setItems(result.data)
            console.log(result.data)
            setLoading(false);
        }
        fetchItems()        
    },[category])





    return (
        <div>
            { loading ? <Loading/> : items.map( item => (
                <Product key={items.id} item={item} />
            ))
            }
        </div>
    )
}

export default Category

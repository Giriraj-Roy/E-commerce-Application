import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import Title from './Title/Title';
import Loading from './loader/Loading';
// import Footer from './Footer/Footer';

const Home = () => {

    const [ items, setItems] = useState([]);
    const [ loading , setLoading ] = useState(true);

    useEffect( () => {
        const fetchItems = async ()=> {
            const result = await axios('https://fakestoreapi.com/products');
            setItems(result.data)
            console.log(result.data)
            setLoading(false);
        }
        fetchItems()        
    },[])

    return (
        <div className='homecontainer'>
            <Title/>
            <div className="grid-container">
                { loading ? <Loading/> : items.map( item => (
                    <Product key={items.id} item={item} />
                ))
                }            
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Home

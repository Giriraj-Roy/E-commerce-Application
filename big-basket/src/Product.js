import React from 'react';
import './Product.css';
import { Link/*, Route, Routes*/ } from 'react-router-dom';
// import Details from './Details/Details';

const Product = ( {key, item} ) => {

    // <Routes>
    //     <Route path= {`/products/${item.id}`}  element= {<Details key={item.id} item={item} />} />
    // </Routes>

    return (
        <div className="card-list">
            <div id={key} className='grid-item'>
                <div className='grid-image'>
                    <Link to={{ pathname: `/products/`, query: { id: item.id }}} >    
                        <img className='card-img' src={item.image} alt={item.title} />
                    </Link>
                </div>
                <hr/>                
                <div className='price'>{"PRICE: $ "+(item.price)}</div>               
                
            </div>
        </div>
    )
}

export default Product

import React from 'react';
import './Product.css';

const Product = ( {item} ) => {
    return (
        <div className="card-list">
            <div className='grid-item'>
                <img className='card-img' src={item.image} alt={item.title} />
                <h1 className='price'>{"PRICE: $ "+(item.price)}</h1>
            </div>               
        </div>
    )
}

export default Product

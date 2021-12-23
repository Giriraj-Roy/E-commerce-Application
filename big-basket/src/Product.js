import React from 'react';
import './Product.css';

const Product = ( {key, item} ) => {
    return (
        <div className="card-list">
            <div id={key} className='grid-item'>
                <img className='card-img' src={item.image} alt={item.title} />
                <hr/>
                <h1 className='price'>{"PRICE: $ "+(item.price)}</h1>               
                
            </div>
        </div>
    )
}

export default Product

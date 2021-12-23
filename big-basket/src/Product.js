import React from 'react';
import './Product.css';

const Product = ( {key, item} ) => {
    return (
        <div className="card-list">
            <div id={key} className='grid-item'>
                <div className='grid-image'>
                    <img className='card-img' src={item.image} alt={item.title} />
                </div>
                <hr/>                
                <div className='price'>{"PRICE: $ "+(item.price)}</div>               
                
            </div>
        </div>
    )
}

export default Product

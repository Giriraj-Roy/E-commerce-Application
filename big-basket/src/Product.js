import React from 'react';
import './Product.css';

const Product = ( {item} ) => {
    return (
        <div className="cards">

            <div className='card'>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img className='card-img' src={item.image} alt='' />
                    </div>
                    
                    <div className='card-back'>
                        <h1>{item.title}</h1>
                        <ul>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
            


        </div>
    )
}

export default Product

import React from 'react'
import { Link } from 'react-router-dom';
import './ShowProducts.css';

const ShowProducts = ({key, item}) => {
    return (
        <div className="show-card-list">
            <div id={key} className='show-grid-item'>
                <div className='show-grid-image'>
                    <Link to={{ pathname: `/products/${item.id}` /*, query: { id: item.id }*/}} >    
                        <img className='show-card-img' id="imgID" src={item.image} alt={item.title} />
                    </Link>
                </div>
                {/* <hr/>                 */}
                <div className='show-price' id='priceID'>{"PRICE: ₹ "+(item.price)*75}</div>               
                
            </div>
        </div>
    )
}

export default ShowProducts

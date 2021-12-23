import React from 'react';
import './ShowCategories.css';

const ShowCategories = ( {key, ele}) => {
    return (
        <div id={key} className='category'>
            <div className='box'>
                {ele}
            </div>            
        </div>
    )
}

export default ShowCategories

import React from 'react';
import './ShowCategories.css';
import {Link} from 'react-router-dom';

const ShowCategories = ( {key, ele}) => {
    return (
        <div id={key} className='category'>
            <div className='box'>
                {ele}
                <Link to={{pathname: `/categories/${ele}`}}></Link>
            </div>            
        </div>
    )
}

export default ShowCategories

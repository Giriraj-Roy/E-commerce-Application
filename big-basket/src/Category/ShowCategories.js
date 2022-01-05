import React from 'react';
import './ShowCategories.css';
import {Link} from 'react-router-dom';

const ShowCategories = ( {key, ele}) => {
    return (
        <div id={key} className='category'>
            <div className='box'>
                
                <Link to={{pathname: `/categories/${ele}`}} style={{color: "black",textDecoration: "none"}}>{ele}</Link>
            </div>            
        </div>
    )
}

export default ShowCategories

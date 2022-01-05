import React from 'react';
import './Title.css';
import {Link} from 'react-router-dom';

const Title = () => {
    return (
        <div>
            <div className='mycontainer'>
                <span style={{color: "white"}}>Collections</span>
                <div className='mycarthome'>
                    <div  style={{margin: 'auto' }}><Link to='/cart'><span style={{textDecoration: "none"}}>My Cart</span></Link></div>
                </div>
            </div>
            
        </div>
    )
}

export default Title

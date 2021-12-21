import React from 'react';
import Menu from '../Menu/index';
import './Navbar.css';



const Navbar = () => {
    return (
        <div className='container'>
            <Menu/>
            <div className='productsRoute'>
                CATEGORIES
            </div>            
        </div>
    )
}

export default Navbar

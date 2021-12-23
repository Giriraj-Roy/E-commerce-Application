import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/index';
import './Navbar.css';



const Navbar = () => {
    return (
        <div className='container'>
            <Menu/>
            <div className='productsRoute'>
                <Link to='/'>Home Page</Link>
                
            </div>
            <div className='productsRoute'>
                
                <Link to='/categories'>Categories</Link>
            </div>
                         
        </div>
    )
}

export default Navbar

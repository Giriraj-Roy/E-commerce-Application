import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/index';
import './Navbar.css';



const Navbar = () => {
    return (
        <div className='container'>
            <Menu/>
            <div>
                {/* <Link to='/'>Home</Link> */}
                <Link to='/'><button className='productsRoute'>Home</button></Link>
                
            </div>
            <div>
                {/* <Link to='/categories'>Categories</Link> */}
                <Link to='/categories'><button className='productsRoute'>Categories</button></Link>
            </div>
                         
        </div>
    )
}

export default Navbar

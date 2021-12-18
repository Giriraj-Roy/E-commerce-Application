import React from 'react';
import Menu from '../Menu/index';
import './Navbar.css';
import { Link, Route } from 'react-router-dom';
import Deals from '../Deals';

const Navbar = () => {
    return (
        <>
            <Menu/>                        
            {/* <Route exact path="/deals"><Deals/></Route> */}
            <Link to="/deals">Today's Deals</Link>
            
        </>
    )
}

export default Navbar

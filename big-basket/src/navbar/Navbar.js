import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/index';
import './Navbar.css';



const Navbar = () => {
    return (
        <div className='navContainer'>
            <div className='container'>
                <Menu/>
                <div className='productRoute'>
                    <Link to='/' className='productsRoute'>Home</Link>
                    {/* <Link to='/'><button className='productsRoute'>Home</button></Link> */}
                    
                </div>
                <div className='productRoute'>
                    <Link to='/categories' className='productsRoute' >Categories</Link>
                    {/* <Link to='/categories'><button >Categories</button></Link> */}
                </div>
                <div className='productRoute'>
                    <Link to='/games' className='productsRoute'>Play Games</Link>
                    {/* <Link to='/'><button className='productsRoute'>Home</button></Link> */}
                    
                </div>
                            
            </div>
        </div>
    )
}

export default Navbar

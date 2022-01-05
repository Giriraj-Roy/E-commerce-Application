import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Categories from './Category/Categories';
import Home from './Home';
import Details from './Details/Details';
import Cart from './myCart/Cart';


const App = () => {
  
  return (
    // <>
    //   <Home/>
    // </>
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path= {"/products/:id"}  element= {<Details />} />
        <Route path="/games" element={<Categories/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      
    </React.Fragment>
    
    
  )
}

export default App

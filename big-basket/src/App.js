import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Categories from './Category/Categories';
import Home from './Home';
import Details from './Details/Details';


const App = () => {
  return (
    // <>
    //   <Home/>
    // </>
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path= {`/products/`}  element= {<Details />} />
        
      </Routes>
      
    </React.Fragment>
    
    
  )
}

export default App

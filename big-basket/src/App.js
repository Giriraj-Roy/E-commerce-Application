import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Categories from './Categories';
import Home from './Home';


const App = () => {
  return (
    <>
      <Home/>
    </>
    // <BrowserRouter>
    //   <div>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/categories" component={Categories} />
    //   </div>
      
    // </BrowserRouter>
    
    
  )
}

export default App

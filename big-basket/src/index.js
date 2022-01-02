import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import Footer from './Footer/Footer';
import Navbar from './navbar/Navbar';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <br/>      
      <App />
      {/* <Footer/> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

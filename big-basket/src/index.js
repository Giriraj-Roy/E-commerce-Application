import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Navbar from './test1/js/Navbar';
import './test1/css/Navbar.css';
import Home from './test1/js/Home';
import Body from './test1/js/Body';
import './test1/css/Body.css';
import Footer from './test1/js/Footer';
import './test1/css/Footer.css';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar className ='navbar'/>
    <Home />
    <Body />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

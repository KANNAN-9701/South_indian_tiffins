import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route,Link,BrowserRouter,Routes} from 'react-router-dom';
import Home from './component/home.js';
import Menu from './component/menu.js';
import About from './component/about.js';
import Contact from './component/contact';
import Login from './component/login';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <nav className='navbar'>
      <div className='logo'>SOUTH INDIAN TIFFINS</div>
      <ul className='nav-links'>
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" className='hamburger'>&#9776;</label>
        <div className='menu'>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/menu">MENU</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </div>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/menu' element={< Menu/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>  
  </BrowserRouter>
);
 
import React from 'react';
import CartWidget from './CartWidget';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
 <nav className="navigation">
      <a href="/" className="brand-name">
        Bookshop
      </a>
      <div
        className="navigation-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">Books</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
    
    </div>
  )
}

export default Navbar;

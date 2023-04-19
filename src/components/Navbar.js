import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  );
};

export default Navbar;

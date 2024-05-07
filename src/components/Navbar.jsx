import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='topnav'>
        {/* לינק לדף הבית */}
        <Link className='navLink' to="/">Home</Link>
        
        {/* לינק לדף העגלה */}
        <Link className='navLink' to="/cart">🛒 Cart</Link>
        
        {/* לינק לדף המועדפים */}
        <Link className='navLink' to="/favorites">Favorites</Link>
        
        {/* לינק לדף המוצרים */}
        <Link className='navLink' to="/products">Products</Link>
    </div>
  );
}

export default Navbar;

import React from 'react';
import { NavBar } from './NavBar';
import { Cart } from './CartWidget';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header'>
      <Link to="/" className='header-title'>
        SportBall
      </Link>
      <NavBar />
      <Cart />
    </header>
  );
};
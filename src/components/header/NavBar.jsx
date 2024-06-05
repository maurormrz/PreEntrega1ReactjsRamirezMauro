import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='nav'>
      <ul className='nav-menu'>
        <li className='nav-item'><Link className='nav-link' to="/">Inicio</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/category/futbol">Fútbol</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/category/baloncesto">Baloncesto</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/category/voley">Voley</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/category/tenis">Tenis</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/category/rugby">Rugby</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/category/golf">Golf</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/category/handball">Handball</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/category/beisbol">Beisbol</Link></li>
      </ul>
    </nav>
  );
};
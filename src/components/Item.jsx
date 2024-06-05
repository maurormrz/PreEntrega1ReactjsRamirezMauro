import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Item.css';

export const Item = ({ id, name, price, img }) => {
  return (
    <div className='item'>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <Link to={`/item/${id}`} className='item-link'>Ver Detalle</Link>
    </div>
  );
};
import React from 'react';

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className='products-container'>
        <h2 className='products-title'>{greeting}</h2>
    </div>
  );
}
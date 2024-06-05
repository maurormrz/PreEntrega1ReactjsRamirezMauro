import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItems } from '../async-mocks';
import { Item } from './Item';
import '../styles/ItemListContainer.css';

export const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems(id).then(setItems);
  }, [id]);

  return (
    <div className='products-container'>
      <h2 className='products-title'>{greeting}</h2>
      <div className='item-list'>
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../async-mocks';
import '../styles/ItemDetailContainer.css';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(id).then(setItem);
  }, [id]);

  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item-detail-container">
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
    </div>
  );
};
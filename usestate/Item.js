import React from 'react';

const Item = ({ name, price, onAddToCart }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => onAddToCart(price)}>Add to Cart</button> 
    </div>
  );
};

export default Item;

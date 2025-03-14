import React, { useState } from 'react';
import Item from './Item';

function Cart() {
    const[totalItems, setTotalItems] = useState(0);
    const[totalCost, setTotalCost] = useState(0);

    const handleAddToCart = (price) => {
        setTotalItems(totalItems + 1);
        setTotalCost(totalCost + price);
      };
    
      return (
        <div>
          <h1>Shopping Cart</h1>
          <p>Total Items: {totalItems}</p>
          <p>Total Cost: ${totalCost}</p>
    
          {/* List of items */}
          <Item name="Apple" price={2} onAddToCart={handleAddToCart} />
          <Item name="Banana" price={1} onAddToCart={handleAddToCart} />
          <Item name="Orange" price={3} onAddToCart={handleAddToCart} />
        </div>
      );
    };

export default Cart
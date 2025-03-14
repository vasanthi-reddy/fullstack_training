import React, { useState } from 'react'
import ChildCount from './ChildCount';

function ParentCount() {
    const initialValue = 0
    const[count, setCount] = useState(initialValue);

    const incrementCount = () => {
        setCount(count + 1);

    };

  return (
    <div>
       <h1>ParentCount</h1> 
       <button onClick= {incrementCount}>Incremen Count</button>
       <ChildCount count = {count} />
    </div>
  )
}

export default ParentCount;
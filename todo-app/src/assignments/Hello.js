import React, { useState } from 'react';
import GoodBye from './GoodBye';

function Hello() {

    const initialValue = 'Hello';
    const [message, updatedMessage] = useState(initialValue);

    const updateText = () => {
        updatedMessage('GoodBye')
    }
  return (
    <div>
        <h1>Parent Component</h1>
        <p>Message {message}</p>
        <GoodBye changeMessage={updateText}/>
    </div>
  )
}

export default Hello;
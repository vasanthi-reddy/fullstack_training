import React from 'react';


function GoodBye({ changeMessage }) {
  return (
    <div>
        <h2>Child Component</h2>
        <button onClick = {changeMessage}>Click Me</button>
    </div>
  )
}

export default GoodBye
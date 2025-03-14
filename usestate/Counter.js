import { useState } from "react"
import React from 'react'

function Counter() {
    const initialCount = 0
    const[count, setCount] = useState(initialCount)


  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '30px' }}>
        Count : {count} <br></br>
        <button onClick={() => setCount(count + 1)}>Increment </button> <br></br>
        <button onClick={() => setCount(count - 1)}>Decrement </button> <br></br>
        <button onClick={() => setCount(initialCount)}>Reset</button> <br></br>
    </div>
  )
}

export default Counter
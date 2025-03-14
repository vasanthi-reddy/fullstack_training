import React, { useState } from 'react'
import Mom from './Mom';

function GrandParent() {
    const[theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

    }
  return (
    <div>
        <h1>GrandParent</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Mom theme={theme} />
    </div>
  )
}

export default GrandParent;
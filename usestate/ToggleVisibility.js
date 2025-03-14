import React, {useState } from 'react'

function ToggleVisibility() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleParagraph = () => {
        setIsVisible(isVisible);
    }


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button onClick = {toggleParagraph}>{isVisible ? 'Hide' : 'Show'}</button>
        {isVisible && <p>Hello World!</p>}

    </div>
  )
}

export default ToggleVisibility;
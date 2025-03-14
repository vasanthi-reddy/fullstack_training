import React from 'react'
import Daughter from './Daughter';

const Mom = ({theme}) => {
  return (
    <div>
        <h2>Mom Component</h2>
        <Daughter theme={theme} />
    </div>
  )
}

export default Mom
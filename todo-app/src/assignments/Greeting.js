import React, { Component } from 'react'

class Greeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isDisplay: 'true'
      }
    }

    
    
  render() {

    return (
        this.state.isDisplay? 'Hello Vasanthi' : 'Hello Guest'
    )
    return (
       
    <div >
      <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '30px' }}>Hello Vasanthi!</div>
      <div>Hello Guest!</div>
    </div>
    )
  }
}

export default Greeting
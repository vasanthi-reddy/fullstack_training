import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Alice"
      }
    }
  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        <Child name = {this.state.name}/>
      </div>
    )
  }
}

export default Parent
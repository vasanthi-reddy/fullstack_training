import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div>
        <h2>Child Component</h2>
        <h3>Hello, {this.props.name}!</h3>
      </div>
    )
  }
}

export default Child
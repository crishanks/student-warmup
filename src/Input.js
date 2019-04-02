import React, { Component } from 'react'

export default class Input extends Component {
  constructor() {
    super()
    this.state = {
      userInput: ''
    }
  }

  handleChange = (ev) => {
    this.setState({
      userInput: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange}>
        </input>
        <p>{this.state.userInput}</p>
      </div>
    )
  }
}
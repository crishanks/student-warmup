import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Welcome to React
          </h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <Input />
        </header>
      </div>
    );
  }
}

export default App;

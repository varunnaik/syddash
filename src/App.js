import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Backdrop from './components/backdrop.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Backdrop />
      </div>
    );
  }
}

export default App;

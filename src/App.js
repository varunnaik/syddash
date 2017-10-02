import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Backdrop from './components/backdrop.js';
import Weather from './components/weather.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Backdrop />
      <Weather />
      </div>
    );
  }
}

export default App;

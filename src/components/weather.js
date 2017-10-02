import React, { Component } from 'react';
import './weather.css';

class Weather extends Component {
  constructor() {
  	super();
  	this.state = {uv: null, min: null, max: null, current: null}
  	this.width = window.innerWidth;
  	this.height = window.innerHeight;
  }
  componentWillMount() {
  	fetch(`http://api.openweathermap.org/data/2.5/uvi?appid=3d64ef645388270c43675757ac206b53&lat=-33.865&lon=151.209444`)
  	.then(res=>res.json())
  	.then(json => {
  		this.setState({

      });

  	})

    fetch('http://api.openweathermap.org/data/2.5/weather?q=sydney,au&apikey=3d64ef645388270c43675757ac206b53')
    .then(res=>res.json())
    .then(json => {
      this.setState({

      });
    })
  }
  render() {
    return (

    );
  }
}

export default Weather;
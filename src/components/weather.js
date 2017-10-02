import React, { Component } from 'react';
import './weather.css';

const translateIconCode = code => {
  return {
    '01d': 'wi-day-sunny',
    '01n': 'wi-night-clear',
    '02d': 'wi-day-cloudy',
    '02n': 'wi-night-cloudy',
    '03d': 'wi-day-sunny-overcast',
    '03n': 'wi-night-cloudy-high',
    '04d': 'wi-cloudy',
    '04n': 'wi-cloudy',
    '09d': 'wi-day-rain',
    '09n': 'wi-night-alt-rain',
    '10d': 'wi-rain',
    '10n': 'wi-rain',
    '11d': 'wi-day-storm-showers',
    '11n': 'wi-night-alt-storm-showers',
    '13d': 'wi-day-snow',
    '13n': 'wi-night-snow-wind',
    '50d': 'wi-day-fog',
    '50n': 'wi-night-fog',
  }[code]
}
class Weather extends Component {
  constructor() {
  	super();
  	this.state = {uv: null, min: null, max: null, current: null, icon: null, text: null}
  	this.width = window.innerWidth;
  	this.height = window.innerHeight;
  }
  componentWillMount() {
  	fetch(`http://api.openweathermap.org/data/2.5/uvi?appid=3d64ef645388270c43675757ac206b53&lat=-33.865&lon=151.209444`)
  	.then(res=>res.json())
  	.then(json => {
  		this.setState({
        uv: json.value
      });
  	})

    fetch('http://api.openweathermap.org/data/2.5/weather?q=sydney,au&apikey=3d64ef645388270c43675757ac206b53')
    .then(res=>res.json())
    .then(json => {
      this.setState({
        min: Math.round(json.main.temp_min - 273.15),
        max: Math.round(json.main.temp_max - 273.15),
        current: Math.round(json.main.temp - 273.15),
        icon: translateIconCode(json.weather[0].icon),
        text: json.weather[0].description
      });
    })
  }
  render() {
    return (
      <div className="weather">
        <h2 className="icon">
          <i className={'wi ' + this.state.icon}></i>
          {this.state.current}°C</h2>
        <div className="minMax">Min: {this.state.min}°C / Max: {this.state.max}°C</div>
        <div className="desc">{this.state.text}</div>
        <div className="uv">UV: {Math.round(this.state.uv)} / {
          this.state.uv < 2.9 ? "Low" :
          this.state.uv < 5.9 ? "Moderate" : 
          this.state.uv < 7.9 ? "Very High" :
          this.state.uv < 10.9 ? "" : "Extreme"
        }</div>
      </div>
    );
  }
}

export default Weather;
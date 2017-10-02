import React, { Component } from 'react';
import './backdrop.css';

class Backdrop extends Component {
  constructor() {
  	super();
  	this.state = {image: null, UTM: null, authorName: null, authorLink: null}
  	this.width = window.innerWidth;
  	this.height = window.innerHeight;
  }
  componentWillMount() {
  	fetch(`http://api.unsplash.com/photos/random?query=sydney&w=${this.width}&h=${this.height}`, {
  		headers: {Authorization: 'Bearer f42ac382267f342344ca200fd91003e6e7b44dd137ee06c9a6ad1d5b8164b16c'}
  	})
  	.then(res=>res.json())
  	.then(json => {
  		this.setState({
  			image: json.urls.full + `&w=${this.width}&fit=max`,
  			authorName: json.user.name,
  			authorLink: json.user.links.html
  		});
  		console.log(json)
  		console.log(json.urls.full + `&w=${this.width}&fit=max`)
  		console.log(json.user.name)
  	})
  }
  render() {
    return (
      <div className="backdrop" style={{backgroundImage: 'url('+this.state.image+')', width: '100%'}}>
      <div className="bgAttribution">Image: Unsplash / <a href={this.state.authorLink} target="_blank">{this.state.authorName}</a>
      </div></div>
    );
  }
}

export default Backdrop;
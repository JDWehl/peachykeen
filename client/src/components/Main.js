import React, { Component } from 'react';

class Main extends Component {
	
	
	state = {
		restaurants: []
	}
	var listHTML = '';
	
	fetch('/restaurants')
		.then(res => res.json())
		.then(restaurants => this.setState({ restaurants }));
		.then(res.forEach(function(item) {
			listHTML += '<li>' + item.name + '</li>';
		}));
		
	document.getElementById("restaurants-list").innerHTML = '<ul>' + listHTML + '</ul>';
	  
  render() {
    return (
      <div className="App">
		Main
      </div>
	  <br>
	  <div id="restaurants-list">
	  </div>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import CitiesAside from './CitiesAside'
import CitiesArticle from './CitiesArticle'


class Cities extends Component {
  constructor() {
    super();
    this.state = {
      cities: [
        {name: "San Francisco", image: "http://localhost:3001/images/sanFrancisco.jpg"},
        {name: "Bangkok", image: "http://localhost:3001/images/bangkok.jpg"},
        {name: "London", image: "http://localhost:3001/images/london.jpg"},
        {name: "Paris", image: "http://localhost:3001/images/paris.jpg"},
        {name: "Dubai", image: "http://localhost:3001/images/dubai.jpg"},
        {name: "New York", image: "http://localhost:3001/images/newYorkCity.jpg"},
        {name: "Tokyo", image: "http://localhost:3001/images/tokyo.jpg"},
        {name: "Sydney", image: "http://localhost:3001/images/sydney.jpg"},
        {name: "Seattle", image: "http://localhost:3001/images/seattle.jpg"},
        {name: "Mexico City", image: "http://localhost:3001/images/mexicoCity.png"}
      ],
      currSelectedCity: ''
    };
  }
  setCurrSelectedCity = (data) => {
    console.log(data);
  }
  // setCurrSelectedCity = (event) => {
  //   console.log(event.target.name);
  // }
  render() {
    return (
        <section id="cityPage">
            <CitiesAside cities={this.state.cities} setCurrSelectedCity={this.setCurrSelectedCity} />
            <CitiesArticle />
        </section>
    );
  }
}

export default Cities;

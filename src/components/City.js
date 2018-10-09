import React, { Component } from 'react';

// https://expressjs.com/en/starter/static-files.html
// backend express set the public folder static, it allow public url to access images store in back end
class City extends Component {
  render() {
    // var citiesList = this.props.cities.map(city => {
   //   return <li><img src={city.image} /><a onClick={this.props.setCurrSelectedCity(city.name)} href="#">{city.name}</a></li>;
   // });
    return (
      <div>
      {/* <li><img src="http://localhost:3001/images/sanFrancisco.jpg" /><a href="#">San Francisco</a></li>
      <li><img src="http://localhost:3001/images/bangkok.jpg" /><a href="#">Bangkok</a></li>
      <li><img src="http://localhost:3001/images/london.jpg" /><a href="#">London</a></li>
      <li><img src="http://localhost:3001/images/paris.jpg" /><a href="#">Paris</a></li>
      <li><img src="http://localhost:3001/images/dubai.jpg" /><a href="#">Dubai</a></li>
      <li><img src="http://localhost:3001/images/newYorkCity.jpg" /><a href="#">New York City</a></li>
      <li><img src="http://localhost:3001/images/tokyo.jpg" /><a href="#">Tokyo</a></li>
      <li><img src="http://localhost:3001/images/sydney.jpg" /><a href="#">Sydney</a></li>
      <li><img src="http://localhost:3001/images/seattle.jpg" /><a href="#">Seattle</a></li>
      <li><img src="http://localhost:3001/images/mexicoCity.png" /><a href="#">Mexico City</a></li> */}
      {/* {citiesList} */}
      <li><img src={this.props.city.image} /><a onClick={this.props.setCurrSelectedCity(this.props.city.name)} href="#">{this.props.city.name}</a></li>
  </div>

    );
  }
}

export default City;
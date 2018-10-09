import React, { Component } from 'react';

// https://expressjs.com/en/starter/static-files.html
// backend express set the public folder static, it allow public url to access images store in back end
class City extends Component {
  // need this helper function to invoke callback function that takes parameter,
  // so when click on a single link will only send back data from that single link,
  // else will send back all links data, treated like clicked on all links.
  handleClick = () => {
    this.props.setCurrSelectedCity(this.props.city)
    console.log("inside city.js: ",this.props.city)
  }
  render() {
    return (
      <div>
      <li><img src={this.props.city.image} /><a onClick={this.handleClick} href="#">{this.props.city.name}</a></li>
  </div>

    );
  }
}

export default City;

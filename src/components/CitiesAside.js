import React, { Component } from 'react';
import CityList from './CityList'

class CitiesAside extends Component {
  render() {
    return (
        <aside>
            <h1>Cities</h1>
            <CityList cities={this.props.cities} setCurrSelectedCity={this.props.setCurrSelectedCity}/>

        </aside>
    );
  }
}

export default CitiesAside;

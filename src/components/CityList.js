import React, { Component } from 'react';
import City from './City'

class CityList extends Component {
  render() {
    var citiesList = this.props.cities.map(city => {
      return <City city={city} setCurrSelectedCity={this.props.setCurrSelectedCity}/>
    }); 
    return (
        <ul>
          {/* <City cities={this.props.cities} setCurrSelectedCity={this.props.setCurrSelectedCity}/> */}
         {citiesList}

        </ul>
    );
  }
}

export default CityList;





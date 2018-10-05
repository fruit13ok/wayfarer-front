import React, { Component } from 'react';
import CityList from './CityList'


class CitiesAside extends Component {
  render() {
    return (
        <aside>
            <h1>Cities</h1>
            <CityList />
        </aside>
    );
  }
}

export default CitiesAside;


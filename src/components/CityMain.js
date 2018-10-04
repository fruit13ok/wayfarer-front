import React, { Component } from 'react';
import CityPostsList from './CityPostsList';

class CityMain extends Component {
  render() {
    return (
        <div className="cityPostsWrapper">
            <div className="cityPostsHeader">
                <h1>Posts</h1>
                <a href="#">+</a>
            </div>
            <CityPostsList />
        </div>
    );
  }
}

export default CityMain;




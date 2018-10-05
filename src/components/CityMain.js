import React, { Component } from 'react';
import CityPostsList from './CityPostsList';
import PostModalContainer from './PostModalContainer';

class CityMain extends Component {
  render() {
    return (
        <div className="cityPostsWrapper">
            <div className="cityPostsHeader">
                <h1>Posts</h1>
                <PostModalContainer />
            </div>
            <CityPostsList />
        </div>
    );
  }
}

export default CityMain;




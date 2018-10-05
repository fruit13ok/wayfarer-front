import React, { Component } from 'react';
import Post from './Post';


class  UserPostsList extends Component {
  render() {
    return (
        <div className="userPosts">
            <h3>Posts by Username</h3>
            <ul>
                <Post />
            </ul>
        </div>
    );
  }
}

export default UserPostsList;



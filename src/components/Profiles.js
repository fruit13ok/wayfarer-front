import React, { Component } from 'react';

class  Profiles extends Component {
  render() {
    return (
        <div className ="userProfInfo">
            <div className="userName">
                    <img className="profilePic" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" />
                <h2>Username</h2>
                <h2>Current City:</h2>
                <h2>Member Since: 10/02/18</h2>
            </div>
            <div className="userPosts">
                <h3>Posts by Username</h3>
                <ul>
                    <li><a href="">Post 1</a></li>
                    <li><a href="">Post 1</a></li>
                    <li><a href="">Post 1</a></li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Profiles;

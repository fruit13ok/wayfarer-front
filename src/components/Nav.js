import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
        <nav id="header-nav">
            <ul>
                <li><a href=""> Sign Up </a></li>
                <li><a href=""> Log In </a></li>
                {/* If logged in hide the above and show the following:  */}
                <li><a href=""> Cities List </a></li>
                <li><a href=""> Users List (for development only)</a></li>
                <li><a href="erase jwt token, redir to landing"> Log Out </a></li>
                <li><a href="logged in user's profile view"> username </a></li>
            </ul>
        </nav>
    );
  }
}

export default Nav;

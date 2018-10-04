import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
        <header>
            <img src="templogo.png" alt="Wayfarer Logo"/>
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
            {/* If logged in, show search bar */}
            <form>
                <input type="search" placeholder="Search Cities"/>
                <button onclick="">GO!</button>
            </form>
        </header>
    );
  }
}

export default Header;

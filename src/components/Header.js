import React, { Component } from 'react';
import Nav from './Nav'
import SearchBar from './SearchBar'


class Header extends Component {
  render() {
    return (
        <header>
            <img src="templogo.png" alt="Wayfarer Logo"/>
            <Nav isLoggedIn={this.props.isLoggedIn}/>
            {/* If logged in, show search bar */}
            <SearchBar />
        </header>
    );
  }
}

export default Header;

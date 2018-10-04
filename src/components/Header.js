import React, { Component } from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';

class Header extends Component {
  render() {
    return (
        <header>
            <img src="templogo.png" alt="Wayfarer Logo"/>
            <Nav />
            <SearchBar />
        </header>
    );
  }
}

export default Header;

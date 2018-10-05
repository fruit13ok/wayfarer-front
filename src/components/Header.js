import React, { Component } from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';

class Header extends Component {
  render() {
    return (
        <header>
            <img src="templogo.png" alt="Wayfarer Logo"/>
            <div id='navAndSearch'>
                <Nav />
                <SearchBar />
            </div>
        </header>
    );
  }
}

export default Header;

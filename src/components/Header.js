import React, { Component } from 'react';
import Nav from './Nav'
import SearchBar from './SearchBar'


class Header extends Component {
  render() {
      console.log(this.props.isLoggedIn)
    return (
        <header>
            <img src="templogo.png" alt="Wayfarer Logo"/>
            <div id='navAndSearch'>
                <Nav isLoggedIn={this.props.isLoggedIn} />
                <SearchBar />
            </div>
        </header>
    );
  }
}

export default Header;

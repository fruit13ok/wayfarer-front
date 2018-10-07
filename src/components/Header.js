import React, { Component } from 'react';
import Nav from './Nav'
import SearchBar from './SearchBar'


class Header extends Component {
    
    handleLogOut = () => {
        this.setState({
          email: '',
          password: '',
          isLoggedIn: false
        })
        localStorage.clear()
      }

  render() {
      console.log(this.props.isLoggedIn)
    return (
        <header>
            <h1>Wayfarer</h1>
            <div id='navAndSearch'>
                <Nav isLoggedIn={this.props.isLoggedIn} handleLogOut={this.handleLogOut}/>
                <SearchBar />
            </div>
        </header>
    );
  }
}

export default Header;

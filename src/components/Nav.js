import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import LoginModalContainer from './LoginModalContainer';

class Nav extends Component {
    render() {
        let navBarItems = []
        if(this.props.isLoggedIn) {
            navBarItems.push(<li><a href=""> Cities List </a></li>)
            navBarItems.push(<li><a href="erase jwt token, redir to landing"> Log Out </a></li>)
            navBarItems.push(<li><a href="logged in user's profile view"> username </a></li>)
            navBarItems.push(<li><a href=""> Users List (for development only)</a></li>)
        }
        else {
            navBarItems.push( <LoginModalContainer/>)
        }
    return (
       <nav id="header-nav">
           <ul>
            {navBarItems}
           </ul>
       </nav>
   );
 }
}

export default Nav;

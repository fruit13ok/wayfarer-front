import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import LoginModalContainer from './LoginModalContainer';

class Nav extends Component {
    render() {
        let navBarItems = []
        if(this.props.isLoggedIn) {
            navBarItems.push(<li><a href=""> Explore </a></li>)
            navBarItems.push(<li><a href="logged in user's profile view"> Profile </a></li>)
            navBarItems.push(<li><a href="erase jwt token, redir to landing" onClick={this.props.handleLogOut}> Log Out </a></li>)
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

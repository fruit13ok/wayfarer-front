import React, { Component } from 'react';

class Nav extends Component {
 render() {
     var isLoggedIn = false;
     var listItems; 
    //  If logged in hide the above and show the following:
     if (isLoggedIn) {
        listItems = (
            <ul>
                <li><a href=""> Cities List </a></li>
                <li><a href=""> Users List (for development only)</a></li>
                <li><a href="erase jwt token, redir to landing"> Log Out </a></li>
                <li><a href="logged in user's profile view"> username </a></li>
            </ul>
        )
       } else {
        listItems = (
            <ul>
                <li><a href=""> Sign Up </a></li>
            <li><a href=""> Log In </a></li>
            </ul>
        )
       }
   return (
       <nav id="header-nav">
        {listItems} 
       </nav>
   );
 }
}

export default Nav;

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import LoginModalContainer from './LoginModalContainer';

class Nav extends Component {
    render() {
        let navBarItems = []
        if(this.props.isLoggedIn) {
            navBarItems.push(<li ><Link to="/cities"> Cities </Link></li>)
            //TODO: /profile/:name back in
            navBarItems.push(<li><Link to="/profile"> Profile </Link></li>)
            navBarItems.push(<li><a href="erase jwt token, redir to landing" onClick={this.props.handleLogOut}> Log Out </a></li>)
            navBarItems.push(<form id='myForm'>
                                <input type="search" placeholder="Search ..."/>
                                <button onClick=""><i class="fas fa-search"></i></button>
                            </form>)
        }
        else {
            navBarItems.push( 
            <LoginModalContainer
            redirect={this.props.redirect}
            />)
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

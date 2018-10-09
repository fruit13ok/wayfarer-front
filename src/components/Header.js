import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Nav from './Nav'

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
        // console.log(this.props.isLoggedIn)
        return (
            <header>
                <Link to="/"><h1>Wayfarer</h1></Link>
                <div id='navAndSearch'>
                    <Nav 
                        authfunc={this.props.authfunc}
                        isLoggedIn={this.props.isLoggedIn} 
                        handleLogOut={this.handleLogOut}/>
                </div>
            </header>
        );
    }
}

export default Header;

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
        window.location='/';
    }

    render() {
        console.log(this.props.isLoggedIn)
        return (
            <header>
                <Link to="/"><h1>Wayfarer</h1></Link>
                <div id='navAndSearch'>
                    <Nav 
                        isLoggedIn={this.props.isLoggedIn} 
                        handleLogOut={this.handleLogOut}
                        redirect={this.props.redirect}/>
                </div>
            </header>
        );
    }
}

export default Header;

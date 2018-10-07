import React, { Component } from 'react';
// import axios from 'axios';


class ProfEditRPC extends Component{
    constructor(){
        super();
        this.state= {show: false,}
    }
    toggle = () => {
        this.setState({show: !this.state.show})
    }

    render(){
        const{ children } = this.props
        return children({
                   show: this.state.show,
                   toggle: this.toggle
               })
    }
}

export default ProfEditRPC
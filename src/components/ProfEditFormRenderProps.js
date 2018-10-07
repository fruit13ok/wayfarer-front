import React, { Component } from 'react';
// import axios from 'axios';


class ProfEditFormRenderProps extends Component{

    
    constructor(){
        super();
        this.state= {
            show: false,
        }
    }

    toggle = () =>{
        this.setState({
            show: !this.state.show
        })
    }
    render(){
        const{ render } = this.props
        return(
            <div>
               {render({
                   show: this.state.show,
                   toggle: this.toggle
               })}
            </div>
            
        )
    }
}

export default ProfEditFormRenderProps
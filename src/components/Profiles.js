import React, { Component } from 'react';
import UserPostsList from './UserPostsList';
import UserModel from '../models/User';

class Profiles extends Component {
    constructor(){
        super()
        this.state = {
        user: {},
        }
    }

    componentDidMount = () =>{
        console.log('Profile Mounted')

        UserModel.getInfo(this.props.match.params.name)
            .then(response=>{
                this.setState({user: response.data})
            })
            .then(() => this.setState({ redirect: true }))
            .catch(err =>{
                console.log("Profile did not mount" + err);
            })
    }
    render() {
        console.log(this.props)
        return (
            <div className ="userProfInfo">
                <div className="userName">
                    <img className="profilePic"  alt ="" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" />
                    <h2>Username: {this.props.match.params.name}</h2>
                    <h2>Date joined:{this.state.user.currentCity}</h2>
                    <h2>Member Since: {this.state.user.dateJoined} </h2>
                </div>
                <UserPostsList/>
            </div>
        );
    }
}

export default Profiles;
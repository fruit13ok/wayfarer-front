import React, { Component } from 'react';
import UserPostsList from './UserPostsList';
import UserModel from '../models/User';
import axios from 'axios'

class Profiles extends Component {
    constructor(){
        super()
        this.state = {
        user: {},
        }
    }

    componentDidMount = () =>{
        console.log('MOOUNT Profile Mounted')
        console.log('MOUNT PROFILE')
        console.log('MOUNT state:', this.props.isLoggedIn)
        console.log(localStorage.token)
        
        var config = {
            headers: {'Authorization': "bearer " + localStorage.token}
        };
    
        var bodyParameters = {
            key: config.jwtSecret
        }
    
        axios.post( 
            'http://localhost:3001/users/verify',
            bodyParameters,
            config
        ).then((response) => {
            console.log("AXIOS RES:",response)
            const userId = response.data.id
            const user = response.data.username

            console.log("USER LOGGED IN:", user)
            // this.setState({
            //     user:user
            // })

        }).catch((error) => {
            console.log("AXIOS ERROR:",error)
        });

        UserModel.getInfo(this.props.match.params.name)
            .then(response=>{
                this.setState({user: response.data})
            })
            .catch(err =>{
                console.log("Profile did not mount" + err);
            })
}
    render() {

        console.log('RENDER PROFILE')
        console.log('RENDER state:', this.props.isLoggedIn)
        console.log('RENDER:',localStorage.token)

        return (
            <div className ="userProfInfo">
                <div className="userName">
                    <img className="profilePic"  alt ="" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" />
                    <h2>{this.props.match.params.name}</h2>
                    <h2>{this.state.user.currentCity}</h2>
                    <h2>Member Since: {this.state.user.dateJoined} </h2>
                </div>
                <UserPostsList/>
            </div>
        );
    }
}

export default Profiles;

import React, { Component } from 'react';
import UserPostsList from './UserPostsList';
import UserModel from '../models/User';

class Profiles extends Component {
    constructor(){
        super()
        this.state = {
          user: [],
        }
      }

    //   componentDidMount = async() => {
    //     UserModel.getInfo(localStorage.getItem("username"))
    //     .then(res =>{
    //         console.log(res)
    //         this.setState({user:res.data})
    //     })
    //     .catch(err =>{
    //         console.log("Profile Catch",err)
    //     })

    //     componentDidMount = async () =>{

    //     }
    //       const name  = this.params.name
    //     console.log(`here is the id`, name)
    //     await fetch 
    //     (`http://localhost:3001/users/${name}`)
    
    //     .then(response => response.json())
    //     .then(info => this.setState({user : [info.data]} ))
    //     .catch(err => error)
        
    //     console.log('here is the state ',this.state.user);
    //     console.log("NAME" + this.props.name)
    //   }

  render() {
    return (
        <div className ="userProfInfo">
            <div className="userName">
                <img className="profilePic" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" />
                <h2>Username{this.state.name}</h2>
                <h2>Current City:{this.state.currentCity}</h2>
                <h2>Member Since:{this.state.dateJoined} </h2>
            </div>
            <UserPostsList/>
        </div>
    );
  }
}

export default Profiles;

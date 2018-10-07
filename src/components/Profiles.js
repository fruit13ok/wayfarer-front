import React, { Component } from 'react';
import UserPostsList from './UserPostsList';
// import ProfileEditForm from './ProfileEditForm';
import ProfEditRPC from './ProfEditRPC'
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
                console.log(response)
                if (!response.data) {
                    this.setState({error: 1})
                } else {
                    this.setState({user: response.data})
                }
            })
            .catch(err =>{
                this.setState({error: 2})
                console.log("Profile did not mount" + err);
            })
      }
  render() {
      if (this.state.error) {
          return (
              <p>"Error"</p>
          )
      }
    return (
        <div className ="userProfInfo">
            <div className="userName">
                <img className="profilePic"  alt ="" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" />
                <h2>Username: {this.props.match.params.name}</h2>
                    <div>
                        <ProfEditRPC>
                            {({show, toggle})=>(
                                <div>
                                    {show && 
                                    <form className ='editUsernameForm'> 
                                        <input className='editUsernameInput' type="text" name = "edit" />
                                        <button className = 'editUsernameSubmit' value = "Submit" >Submit </button>
                                    </form> }
                                    <button onClick={toggle}>Edit</button>
                                </div>
                            )}
                          </ProfEditRPC>
                    </div>

                <h2>Current City:{this.state.user.currentCity}</h2>
                    <div>
                        <ProfEditRPC>
                            {({show, toggle})=>(
                                <div>
                                    {show && 
                                    <form className ='editCityForm'> 
                                        <input className='editCityInput'type="text" name = "edit" />
                                        <button className = 'editCitySubmit' value = "Submit" >Submit </button>
                                    </form> }
                                    <button onClick={toggle}>Edit</button>
                                </div>
                            )}
                        </ProfEditRPC>
                    </div>

                <h2>Member Since:{this.state.user.dateJoined} </h2>
            </div>
            <UserPostsList/> 
        </div>
    );
  }
}

export default Profiles;

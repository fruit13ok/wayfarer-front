import React, { Component } from 'react';
import axios from 'axios';
// import '.s/index.css';
import LoginModal from './LoginModal';

class LoginModalContainer extends Component {
  constructor () {
    super()
    this.state = {
      modalIsOpen: false,
      // input1: 'initial input1 string',
      // input2: 'initial input2 string',
      // input3: 'initial input3 string',

      username:'',
      password: '',
      currentCity: '',
      isLoggedIn: false
    }
  }
  // this LoginModalCOntainer.js has a button to launch modal by set modalIsOpen state to true, LoginModal.js will listen to it
  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  }
  // LoginModal.js has a button to close modal by set modalIsOpen state to false, LoginModal.js will listen to it
  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  }
  // callback change states by multiple form inputs, 
  // target.name and [name] is build-in to match state name and form name attribute
  handleInput = (event) => {
    // let name = event.target.name;
    // let value  = event.target.value;
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  // not doing much now, should use to launch something or pass state some where else
  handleSignUp = (event) => {
    console.log('input1: ',this.state.username);
    console.log('input2: ',this.state.password);
    console.log('input3: ',this.state.currentCity);
    event.preventDefault();
      axios.post('http://localhost:3001/',
        {
          username: this.state.username,
          password: this.state.password,
          currentCity: this.state.currentCity
        } )
        .then(response => {
          console.log('SUCCESS')
          // localStorage.token=response.data.token
          // this.setState({
          //   isLoggedIn: true
          // })
        })
        .catch(err => console.log(err))
  }

  handleLogIn = (event) => {
    event.preventDefault();
    console.log('input1: ',this.state.username);
    console.log('input2: ',this.state.password);
    
    axios.post('http://localhost:3001/', 
    {
      username: this.state.username,
      password: this.state.password
    })
    .then(response => {
    localStorage.token= response.data.token
    this.setState({
      isLoggedIn: true
    })
  })
  .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="">
        {/* <p>inside LoginModalCONTAINER.js</p>
        <p>{this.state.input1}</p>
        <p>{this.state.input2}</p>
        <p>{this.state.input3}</p> */}
        <button
          onClick={this.handleOpenModal}
        >
          Sign In / Login
        </button>
        <LoginModal 
        modalIsOpen={this.state.modalIsOpen} 
        handleCloseModal={this.handleCloseModal}
        handleInput={this.handleInput}
        handleSignUp={this.handleSignUp}
        handleLogIn={this.handleLogIn} />
      </div>
    );
  }
}

export default LoginModalContainer;
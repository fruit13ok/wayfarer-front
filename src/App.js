import React, { Component } from 'react';
//import axios from 'axios'
//import Modal from 'react-modal' 
//import Carousel from 'react-carousel'
import { Route, Link, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import axios from 'axios'


class App extends Component {
  constructor () {
    super()

    this.state = {
      isLoggedIn:false,
      redirect: false
    }
  }

componentDidMount () {
  if (localStorage.token) {
    this.setState({
      isLoggedIn:true,
    })
  } else {
    this.setState({
      isLoggedIn:false
    })
  }
}

// handleSignUp = (event) => {
//   console.log('username: ',this.state.username);
//   console.log('password: ',this.state.password);
//   console.log('currentCity: ',this.state.currentCity);
//   event.preventDefault();
//     axios.post('http://localhost:3001/users/signup',
//       {
//         username: this.state.username,
//         password: this.state.password,
//         currentCity: this.state.currentCity
//       } )
//       .then(response => {
//         console.log('SUCCESS')
//         console.log('Rep.data.tok' + response.data.token)
//         localStorage.token=response.data.token
//         console.log('Local Storage' + localStorage.token)
//         this.setState({
//           isLoggedIn: true
//         })
//         console.log('logged in:',this.state.isLoggedIn)
//         // if (this.state.isLoggedIn == true){
//         //   console.log("REDIRECT");
//         // }
//       })
//       .then(() => this.setState({ redirect: true }))
//       .catch(err => console.log(err))
// }

// handleLogIn = (event) => {
//   event.preventDefault();
//   console.log('username: ',this.state.username);
//   console.log('password: ',this.state.password);
//   axios.post('http://localhost:3001/users/login', 
//   {
//     username: this.state.username,
//     password: this.state.password
//   })
//   .then(response => {
//     // console.log(response.data.token)

//     console.log('Rep.data.tok' + response.data.token)
//     localStorage.token=response.data.token
//     console.log('Local Storage' + localStorage.token)
    
//     this.setState({
//       isLoggedIn: true
//     })
//     console.log('logged in:', this.state.isLoggedIn)
//   })
//   .catch(err => console.log(err, 'hello')) 
// }    

// handleLogOut = () => {
//   this.setState({
//   email: '',
//   password: '',
//   isLoggedIn: false
//   })
//   localStorage.clear()
//   window.location='/';
// }

  render() {
    console.log('am i logged in? ' + this.state.isLoggedIn)
    return (
      <div className="App">
        <Header 
        isLoggedIn={this.state.isLoggedIn}
        redirect={this.state.redirect}/>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

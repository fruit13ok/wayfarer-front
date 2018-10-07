import React, { Component } from 'react';
import axios from 'axios';
// import '.s/index.css';
import PostModal from './PostModal';

class PostModalContainer extends Component {
  constructor () {
    super()
    this.state = {
      modalIsOpen: false,
      
      user: '',
      city: '',
      title: '',
      body: '',
      image: ''
    }
  }
  // this PostModalContainer.js has a button to launch modal by set modalIsOpen state to true, PostModal.js will listen to it
  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  }
  // PostModal.js has a button to close modal by set modalIsOpen state to false, PostModal.js will listen to it
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
  handleAddPost = (event) => {
    console.log('user: ',this.state.user);
    console.log('title: ',this.state.title);
    console.log('body: ',this.state.body);
    event.preventDefault();
      axios.post('http://localhost:3000/',
        {
          user: this.state.user,
          title: this.state.title,
          body: this.state.body
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

  render() {
    return (
      <div className="">
        {/* <p>inside PostModalContainer.js</p>
        <p>{this.state.input1}</p>
        <p>{this.state.input2}</p>
        <p>{this.state.input3}</p> */}
        <button id="plus"
          onClick={this.handleOpenModal}
        >
          +
        </button>
        <PostModal 
        modalIsOpen={this.state.modalIsOpen} 
        handleCloseModal={this.handleCloseModal}
        handleInput={this.handleInput}
        handleAddPost={this.handleAddPost} />
      </div>
    );
  }
}

export default PostModalContainer;
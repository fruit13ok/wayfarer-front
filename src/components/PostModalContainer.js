import React, { Component } from 'react';
import PostModal from './PostModal'

class PostModalContainer extends Component {
  constructor () {
    super()
    this.state = {
      modalIsOpen: false,
      input1: 'initial input1 string',
      input2: 'initial input2 string',
      input3: 'initial input3 string',
    }
  }
  // App.js has a button to launch modal by set modalIsOpen state to true, LoginModal.js will listen to it
  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  }
  // LoginModal.js has a button to close modal by set modalIsOpen state to false, LoginModal.js will listen to it
  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  }
  // callback change states by multiple form inputs, 
  // target.name and [name] is build-in to match state name and form name attribute
  handleChange = (event) => {
    let name = event.target.name;
    let value  = event.target.value;
    this.setState({
      [name]: value
    });
  }
  // not doing much now, should use to launch something or pass state some where else
  handleSubmit = (event) => {
    console.log('input1: ',this.state.input1);
    console.log('input2: ',this.state.input2);
    console.log('input3: ',this.state.input3);
    event.preventDefault();
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
          +
        </button>
        <PostModal 
        modalIsOpen={this.state.modalIsOpen} 
        handleCloseModal={this.handleCloseModal}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default PostModalContainer;
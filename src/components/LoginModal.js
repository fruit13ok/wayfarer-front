import React, { Component } from 'react';
import Modal from 'react-modal';
// import './.css';

// npm install react-modal
// https://www.npmjs.com/package/react-modal#examples
// https://github.com/reactjs/react-modal/blob/a2c38cc1032500ac697bf1d1d68dbb256b7fb097/docs/README.md

// setAppElement() - This is needed so screen readers don't see main content when modal is opened
//  #root is the id in index.html
// functional component instead of class component
// Modal require to pass in some props to work
// isOpen - Boolean describing if the modal should be shown or not
// contentLabel - String indicating how the content container should be announced to screenreaders
// onRequestClose - Function that will be run when the modal is requested to be closed (either by clicking on overlay or pressing ESC)
// className and overlayClassName apply style from LoginModal.css to this Modal
// multiple input form need to have name attribute to identify which state

Modal.setAppElement('#root')
// const LoginModal = (props) => {

class LoginModal extends Component {
    render () {
        return (
            <Modal 
                isOpen={this.props.modalIsOpen} 
                contentLabel="Example Modal"
                onRequestClose={this.props.handleCloseModal} 
                className="Modal"
                overlayClassName="Overlay">

                <button id="closeModal" onClick={this.props.handleCloseModal}> x </button>

                <form id="signUpForm">
                    <h4>SIGN UP</h4>
                    <input type="text" name='username' placeholder="Username" onChange={this.props.handleInput} required/>
                    <input type="password" name='password' placeholder="Password" onChange={this.props.handleInput} required/>
                    <input type="text" name='currentCity' placeholder="Current City" onChange={this.props.handleInput} required/>
                    <input id="signUpInput"type="submit"  value="Submit" onClick={this.props.handleSignUp}/>
                </form>

                <form id="logInForm">
                    <h4>LOG IN</h4>
                    <input type="text" name='username' placeholder="Username" onChange={this.props.handleInput} required/>
                    <input type="password" name='password' placeholder="Password" onChange={this.props.handleInput} required/>
                    <input id="logInInput" type="submit"  value="Submit" onClick={this.props.handleLogIn}/>
                </form>

            </Modal>
        )
    }
}

export default LoginModal;
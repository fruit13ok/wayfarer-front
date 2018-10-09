import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')
class PostModal extends Component {
    render () {
        return (
            <Modal
                isOpen={this.props.modalIsOpen}
                contentLabel="Example Modal"
                onRequestClose={this.props.handleCloseModal}
                className="Modal"
                overlayClassName="Overlay">
                
                <button id="closeModal" onClick={this.props.handleCloseModal}> x </button>

                <form id="addPost">
                    <h1>ADD POST</h1>
                    <input type="text" name='title' placeholder="Title" onChange={this.props.handleInput}/>
                    <textarea type="text" name='body' placeholder="Body" onChange={this.props.handleInput}></textarea>
                    <input type="image" />
                    <input id="addPostInput"type="submit"  value="Add Post" onClick={this.props.handleAddPost}/>
                </form>

            </Modal>
        )
    }
}

export default PostModal;



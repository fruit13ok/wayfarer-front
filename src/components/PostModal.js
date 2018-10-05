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
        overlayClassName="Overlay"
        >
        ADD POST
            <form id="addPost">
                <input type="text" name='title' placeholder="Title" onChange={this.props.handleInput}/>
                <input type="text" name='body' placeholder="Body" onChange={this.props.handleInput}/>
                <input type="image" />
                <input type="submit"  value="Add Post" onClick={this.props.handleAddPost}/>
            </form>

            <button onClick={this.props.handleCloseModal}> x </button>
        </Modal>
    )
}
}

export default PostModal;



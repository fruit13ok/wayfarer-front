import React from 'react';
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
const PostModal = (props) => {
    return (
        <Modal
        isOpen={props.modalIsOpen}
        contentLabel="Example Modal"
        onRequestClose={props.handleCloseModal}
        className="Modal"
        overlayClassName="Overlay"
        >
            <form onSubmit={props.handleSubmit}>
                <input type="text" name='input1' onKeyUp={props.handleChange}/>
                <input type="text" name='input2' onKeyUp={props.handleChange}/>
                <input type="text" name='input3' onKeyUp={props.handleChange}/>
                <input type="submit"  value="Submit" />
            </form>
            <button onClick={props.handleCloseModal}> x </button>
        </Modal>
    )
};

export default PostModal;
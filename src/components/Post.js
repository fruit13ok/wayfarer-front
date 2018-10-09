import React, { Component } from 'react';

class  Post extends Component {
  render() {
    return (
      // <li post-id={this.props.post.id}>
      //     <div>
      //         <h4>{this.props.post.title}</h4>
      //         <p>{this.props.post.body}</p>
      //     </div>
      // </li> 
      <div className="postContainer">
        <div className="postImage">
            <img src="#" /> 
        </div>
        <div className="postContent">
            <h2>Title of Post</h2>
            <p>Incididunt labore exercitation reprehenderit pariatur sit 
              adipisicing excepteur eu dolore sit. Deserunt deserunt officia 
              excepteur esse sunt anim tempor. Anim adipisicing incididunt 
              pariatur dolor velit officia aliqua esse officia.</p>
        </div>
    </div>
    );
  }
}

export default Post;



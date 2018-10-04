import React, { Component } from 'react';

class Cities extends Component {
  render() {
    return (
        <section id="cityPage">
            <aside>
                    <h1>Cities</h1>
                    <ul>
                        <li><img src="#" /><a href="#">San Francisco</a></li>
                        <li><img src="#" /><a href="#">Bangkok</a></li>
                        <li><img src="#" /><a href="#">London</a></li>
                        <li><img src="#" /><a href="#">Paris</a></li>
                        <li><img src="#" /><a href="#">Dubai</a></li>
                        <li><img src="#" /><a href="#">Singapore</a></li>
                        <li><img src="#" /><a href="#">New York City</a></li>
                        <li><img src="#" /><a href="#">Tokyo</a></li>
                        <li><img src="#" /><a href="#">Sydney</a></li>
                        <li><img src="#" /><a href="#">Seattle</a></li>
                        <li><img src="#" /><a href="#">Mexico City</a></li>
                    </ul>
            </aside>
            <article>
                <div className="cityHeaderWrapper">
                    <div className="cityHeaderText">
                        <h1>San Francisco</h1>
                        <h3>California, USA</h3>
                    </div>
                    <div className="cityHeaderImage">
                        <img src="#" />
                    </div>
                </div>
                <div className="cityPostsWrapper">
                    <div className="cityPostsHeader">
                        <h1>Posts</h1>
                        <a href="#">+</a>
                    </div>
                    <div className="postContainer">
                        <div className="postImage">
                            <img src="#" /> 
                        </div>
                        <div className="postContent">
                            <h2>Title of Post</h2>
                            <p>Incididunt labore exercitation reprehenderit pariatur sit adipisicing excepteur eu dolore sit. Deserunt deserunt officia excepteur esse sunt anim tempor. Anim adipisicing incididunt pariatur dolor velit officia aliqua esse officia.</p>
                        </div>
                    </div>
                    <div className="postContainer">
                            <div className="postImage">
                                <img src="#" /> 
                            </div>
                            <div className="postContent">
                                <h2>Title of Post</h2>
                                <p>Incididunt labore exercitation reprehenderit pariatur sit adipisicing excepteur eu dolore sit. Deserunt deserunt officia excepteur esse sunt anim tempor. Anim adipisicing incididunt pariatur dolor velit officia aliqua esse officia.</p>
                            </div>
                    </div>
                    <div className="postContainer">
                            <div className="postImage">
                                <img src="#" /> 
                            </div>
                            <div className="postContent">
                                <h2>Title of Post</h2>
                                <p>Incididunt labore exercitation reprehenderit pariatur sit adipisicing excepteur eu dolore sit. Deserunt deserunt officia excepteur esse sunt anim tempor. Anim adipisicing incididunt pariatur dolor velit officia aliqua esse officia.</p>
                            </div>
                    </div>
                </div>
            </article>
        </section>
    );
  }
}

export default Cities;

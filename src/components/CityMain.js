import React, { Component } from 'react';
import CityPostsList from './CityPostsList';
import PostModalContainer from './PostModalContainer';
import PostModel from '../models/PostModel';

class CityMain extends Component {
    constructor(){
        super()
        
        this.state = {
            posts: []
        }
    }
    
    componentDidMount(){
        this.fetchData()
    }

    fetchData(){
        PostModel.all()
        .then( (res) => {
            this.setState ({
                posts: res.data.posts,
                post: ''
            })
        })
    }

    render() {
        return (
            <div className="cityPostsWrapper">
                <div className="cityPostsHeader">
                    <h1>Posts</h1>
                    <PostModalContainer />
                </div>
                <CityPostsList posts={this.state.posts}/>
            </div>
        );
    }
}

export default CityMain;




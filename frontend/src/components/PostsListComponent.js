import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Post = props => (
    <tr>
        <td className={props.post.isFullfilled ? 'completed' : ''}>{props.post.title}</td>
        <td className={props.post.isFullfilled ? 'completed' : ''}>{props.post.location}</td>
        <td className={props.post.isFullfilled ? 'completed' : ''}>{props.post.content}</td>
        <td className={props.post.isFullfilled ? 'completed' : ''}>{props.post.isFullfilled}</td>
        <td className={props.post.isFullfilled ? 'completed' : ''}>{props.post.isGiver}</td>
        <td>
            <Link to={"/editpost/"+props.post._id}>Edit</Link>
        </td>
    </tr>
)


export default class PostsList extends Component {

    constructor(props) {
        super(props);
        this.state = {posts: []};
    }


    componentDidMount() {
        axios.get('http://localhost:4000/posts/')
            .then(response => {
                this.setState({ posts: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }


    postList() {
        return this.state.posts.map(function(currentPost, i){
            return <Post post={currentPost} key={i} />;
        })
    }


    render() {
        return (
            <div>
                <h3>Posts List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th>isFullfilled</th>
                        <th>isGiver</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.postList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
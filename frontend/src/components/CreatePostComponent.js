import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title : '',
            location : '',
            content: '',
            isGiver: false,
            isFullfilled: false
        };

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onChangeIsGiver = this.onChangeIsGiver.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // methods to update state properties of post object
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        });
    }
    onChangeContent(e) {
        this.setState({
            content: e.target.value
        });
    }
    onChangeIsGiver(e) {
        this.setState({
            isGiver: !this.state.isGiver
        });
    }


    // onsubmit
    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Post Title: ${this.state.title}`);
        console.log(`Post Location: ${this.state.location}`);
        console.log(`Post Content: ${this.state.content}`);
        console.log(`Post IsGiver: ${this.state.isGiver}`);
        console.log(`Post IsFullfilled: ${this.state.isFullfilled}`);

        const newPost = {
            title: this.state.title,
            location: this.state.location,
            content: this.state.content,
            isFullfilled: this.state.isFullfilled,
            isGiver: this.state.isGiver
        };

        axios.post('http://localhost:4000/posts/add', newPost)
            .then(res => console.log(res.data));

        this.setState({
            title : '',
            location : '',
            content: '',
            isGiver: false,
            isFullfilled: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>

                <h3>Create New Post</h3>

                <form onSubmit={this.onSubmit}>


                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeIsGiver}
                                checked={this.state.isGiver}
                                value={this.state.isGiver}
                        />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            I am posting as a giver.
                        </label>
                    </div>


                    <div className="form-group">
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                required={true}
                        />
                    </div>

                    <div className="form-group">
                        <label>Location: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.location}
                            onChange={this.onChangeLocation}
                            required={true}
                        />
                    </div>

                    <div className="form-group">
                        <label>Description: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.content}
                            onChange={this.onChangeContent}
                            required={true}
                        />
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Create Post" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
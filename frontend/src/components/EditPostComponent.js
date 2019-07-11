import React, { Component } from 'react';
import axios from 'axios';


export default class EditPost extends Component {

    constructor(props) {
        super(props);


        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onChangeIsFullfilled = this.onChangeIsFullfilled.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            title : '',
            location : '',
            content: '',
            isGiver: '',
            isFullfilled: false
        }
    }


    componentDidMount() {
        axios.get('http://localhost:4000/posts/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    title : response.data.title,
                    location : response.data.location,
                    content: response.data.content,
                    isFullfilled: response.data.isFullfilled
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    onChangeIsGiver(e) {
        this.setState({
            isGiver: e.target.value
        });
    }

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

    onChangeIsFullfilled(e) {
        this.setState({
            isFullfilled: !this.state.isFullfilled
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const obj = {
            title : this.state.title,
            location : this.state.location,
            content: this.state.content,
            isFullfilled: this.state.isFullfilled
        };
        console.log(obj);
        axios.post('http://localhost:4000/posts/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }



    render() {
        return (
            <div>

                <h3>Update Post</h3>

                <form onSubmit={this.onSubmit}>


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

                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeIsFullfilled}
                                checked={this.state.isFullfilled}
                                value={this.state.isFullfilled}
                        />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            This post has been fulfilled.
                        </label>
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Update Post" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
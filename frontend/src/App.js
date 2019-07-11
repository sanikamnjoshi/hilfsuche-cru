import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import PostsList from "./components/PostsListComponent"
import CreatePost from "./components/CreatePostComponent"
import EditPost from"./components/EditPostComponent"

import logo from './logo.svg';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" target="_blank">
                            <img src={logo} width="30" height="30"/>
                        </a>

                        <Link to="/" className="navbar-brand">hilfsuche app</Link>

                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">

                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">Posts</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/createpost" className="nav-link">Create Post</Link>
                                </li>

                            </ul>
                        </div>
                    </nav>

                    <br/>

                    {/*For each route which needs to be added to the application a new
                    <Route> element is added. The attributes path and component are
                    used to add the configuration settings for each route. By using the
                    attribute path the routing path is set and by using the component
                    attribute the path is connected with a component.*/}

                    {/* ONE COMPONENT PER ROUTE!!! */}
                    <Route path="/" exact component={PostsList} />
                    <Route path="/editpost/:id" component={EditPost} />
                    <Route path="/createpost" component={CreatePost} />

                </div>
            </Router>

        );
    }
}

export default App;
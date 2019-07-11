const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const postRoutes = express.Router();
const PORT = 4000;

let Post = require('./PostModel');

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/posts', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})



postRoutes.route('/').get(function(req, res) {
    Post.find(function(err, posts) {
        if (err) {
            console.log(err);
        } else {
            res.json(posts);
        }
    });
});

postRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Post.findById(id, function(err, post) {
        res.json(post);
    });
});

postRoutes.route('/add').post(function(req, res) {
    let post = new Post(req.body);
    post.save()
        .then(post => {
            res.status(200).json({'post': 'post added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new post failed');
        });
});

postRoutes.route('/update/:id').post(function(req, res) {
    Post.findById(req.params.id, function(err, post) {
        if (!post)
            res.status(404).send("data is not found");
        else
            post.title = req.body.title;
            post.location = req.body.location;
            post.content = req.body.content;
            post.isFullfilled = req.body.isFullfilled;
            post.isGiver = req.body.isGiver;

        post.save().then(post => {
            res.json('Post updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/posts', postRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


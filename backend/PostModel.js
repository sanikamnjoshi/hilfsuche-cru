const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    title: {
        type: String
    },
    location: {
        type: String
    },
    content: {
        type: String
    },
    isFullfilled: {
        type: Boolean
    },
    isGiver: {
        type: Boolean
    }
});

module.exports = mongoose.model('Post', Post);
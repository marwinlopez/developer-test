const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        createdAt: { type: String, required: true },
        details: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('posts', Post)
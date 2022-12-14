const Post = require("../models/posts.model");

exports.allPosts = async (req, res) => {
    await Post.find({}, (err, posts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!posts.length) {
            return res
                .status(404)
                .json({ success: false, error: `Post not found` })
        }
        return res.status(200).json({ success: true, posts })
    }).catch(err => console.log(err))
}

exports.createPosts = (req, res) => {
    const { body } = req;
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: '',
        })
    }

    const post = new Post(body)

    if (!post) {
        return res.status(400).json({ success: false, error: err })
    }

    post
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: post._id,
                message: 'Post created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Post not created!',
            })
        });
}

exports.getPostsById = async (req, res) => {
    await Post.findOne({ _id: req.params.id }, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, post })
    }).catch(err => console.log(err))
}
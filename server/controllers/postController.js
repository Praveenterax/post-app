const { validationResult } = require('express-validator');
const Post = require('../models/post');
const Comment = require('../models/comment');

exports.getPosts = (req, res, next) => {
    Post.find().sort({ createdAt: -1 }).lean().then((posts) => {
        if (!posts) {
            const error = new Error('No posts found');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({
            message: 'Fetched posts',
            posts: posts,
        })
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};

exports.getPostDetails = (req, res, next) => {
    const postId = req.params.postId;
    Post.findById(postId).then((post) => {
        if (!post) {
            const error = new Error('No post found');
            error.statusCode = 404;
            throw error;
        }
        return post.populate('comments', 'comment', null, { sort: { createdAt: -1 } });
    }).then((post) => {
        res.status(200).json({
            message: 'Fetched a single post',
            post: post,
        });
    }).catch((err) => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })
};

exports.addComment = (req, res, next) => {
    const postId = req.params.postId;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Failed to add comment! Validation Error');
        error.statusCode = 422;
        throw error;
    }

    Post.findById(postId).then((post) => {
        if (!post) {
            const error = new Error('No post found');
            error.statusCode = 404;
            throw error;
        }
        const newComment = new Comment({
            ...req.body,
            postId: postId,
        });
        return newComment.save().then(comment => {
            post.comments.push(comment._id);
            return post.save();
        }).catch(err => {
            const error = new Error('Comment could not be added');
            error.statusCode = 500;
            next(error);
        });
    }).then(post => {
        return post.populate('comments', "comment", null, { sort: { createdAt: -1 } });
    }).then((post) => {
        res.status(201).json({
            message: 'Comment added successfully',
            comments: post.comments,
        });
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })

};
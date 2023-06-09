const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        comment: {
            type: String,
            required: true,
        },
        postId: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
            required: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Comment', commentSchema);
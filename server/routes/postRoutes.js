const express = require('express');
const { body } = require('express-validator');

const postController = require('../controllers/postController');

const router = express.Router();


router.get('/posts', postController.getPosts);

router.get('/post/:postId', postController.getPostDetails);

router.post('/add-comment/:postId', [body('comment').trim().not().isEmpty()], postController.addComment);

module.exports = router;
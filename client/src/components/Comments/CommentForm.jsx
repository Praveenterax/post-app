import axios from 'axios';
import React, { useState, useRef } from 'react';
import { useParams } from "react-router-dom";
import { Box, TextField, Button } from '@mui/material';

import Config from "../../Config.json";


const CommentForm = ({ updateComments }) => {

    const { postId } = useParams();
    const commentRef = useRef();

    const [fieldError, setFieldError] = useState({ error: false, message: ' ' });

    const submitCommentHandler = (event) => {
        event.preventDefault();
        const value = commentRef.current.value;
        if (value.trim() === "") {
            setFieldError({ error: true, message: 'Comment should not be empty' });
            return;
        }
        setFieldError({ error: false, message: ' ' });
        const body = { comment: value };
        axios.post(`${Config.serverURL}/add-comment/${postId}`, body).then(res => {
            updateComments(res.data.comments);
            commentRef.current.value = '';
            commentRef.current.blur();
        }).catch(err => console.log(err));
    };

    return (
        <Box sx={{ marginY: '1rem' }}>
            <form onSubmit={submitCommentHandler}>
                <TextField
                    id="comment"
                    inputRef={commentRef}
                    multiline
                    fullWidth
                    label="Your Comment"
                    name='comment'
                    error={fieldError.error}
                    helperText={fieldError.message}
                    onFocus={() => setFieldError({ error: false, message: ' ' })}
                />
                <Button type='submit' variant='contained' sx={{ width: { xs: '100%', sm: '100%', md: '20%', lg: '20%' }, marginY: '0.8rem' }}>Add Comment</Button>
            </form>
        </Box>

    )
}

export default CommentForm
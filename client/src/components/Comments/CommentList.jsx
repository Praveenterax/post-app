import React from 'react';
import { Box, Divider, ListItem, ListItemText, Typography } from '@mui/material';

const commentWrapperStyle = {
    width: '100%',
    backgroundColor: '#f8f8f8',
    minHeight: '150px',
    display: 'flex',
    borderRadius: '4px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

const CommentList = ({ comments = [] }) => {

    if (comments.length === 0) {
        return (<Box sx={commentWrapperStyle}>
            <Typography variant='body1' align='center'>No Comments!</Typography>
            <Typography variant='body2' align='center'>Be the first one to add...</Typography>
        </Box>)
    }

    const RenderComment = ({ comment }) => {
        return (
            <>
                <ListItem>
                    <ListItemText primary={comment.comment} />
                </ListItem>
                <Divider />
            </>
        )
    }

    return (
        <>
            <Typography variant='body' borderBottom='1px solid #8f8f8f'>Previous comments</Typography>
            {comments.map((comment, index) => <RenderComment key={comment._id} comment={comment} />)}
        </>
    )
}

export default CommentList;
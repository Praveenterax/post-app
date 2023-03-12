import { Container, Typography } from '@mui/material';
import React from 'react';
import { CommentForm, CommentList } from './index';

const CommentSection = ({ comments, updateComments }) => {


    return (
        <Container sx={{ marginTop: '1rem', backgroundColor: '#ffffff', padding: '10px', borderRadius: '4px' }}>
            <Typography variant='h6'>Comments</Typography>
            <CommentForm updateComments={updateComments} />
            <CommentList comments={comments} />
        </Container>
    )
}

export default CommentSection;
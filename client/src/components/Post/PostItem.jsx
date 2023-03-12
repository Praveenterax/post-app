import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Line } from '../common';

const textStyle = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
};

const postStyle = {
    '&:hover': {
        boxShadow: 3,
        // cursor: 'pointer'
    }
}
const PostItem = (props) => {

    const { post } = props;

    if (!post || (Object.keys(post).length < 1)) {
        return null
    }
    return (
        <Card sx={postStyle}>
            <Container>
                <CardContent>
                    {post.title ?
                        <Typography color="text.primary" variant='h6' sx={{ ...textStyle, WebkitLineClamp: 1 }} aria-label={post.title} title={post.title}>
                            {post.title}
                        </Typography> :
                        <Typography variant='caption' color='InactiveCaptionText' >No title added!</Typography>
                    }
                </CardContent>
                <Line style={{ marginTop: '5px' }} />
                <CardContent style={{ height: '50px' }}>
                    {post.description ?
                        <Typography color="text.secondary" fontSize='0.95rem' sx={textStyle}>
                            {post.description}
                        </Typography> :
                        <Typography variant='caption' color='InactiveCaptionText' >No description added!</Typography>
                    }
                </CardContent>
                <Line />
                <CardActions sx={{ marginBottom: '20px' }}>
                    <Box>
                        <Button component={Link} size='small' to={`/post/${post._id}`}>View Post</Button>
                    </Box>
                </CardActions>
            </Container>

        </Card >
    )
}

export default PostItem
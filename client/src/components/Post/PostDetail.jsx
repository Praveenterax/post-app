import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/system';

import { Line } from '../common';


const PostDetail = ({ post }) => {
    return (
        <>
            <Card>
                <Container>
                    <CardContent>
                        {post.title ?
                            <Typography color="text.secondary" variant='h5'>
                                {post.title}
                            </Typography> :
                            <Typography variant='caption' color='InactiveCaptionText' >No title added!</Typography>
                        }
                    </CardContent>
                    <Line style={{ marginTop: '5px' }} />
                    <CardContent style={{ height: '120px' }}>
                        {post.description ?
                            <Typography color="text.secondary">
                                {post.description}
                            </Typography> :
                            <Typography variant='caption' color='InactiveCaptionText' >No description added!</Typography>
                        }
                    </CardContent>
                </Container>
            </Card>
        </>
    )
}

export default PostDetail
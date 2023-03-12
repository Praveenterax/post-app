import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { PostDetail } from '../components/Post';
import { CommentSection } from '../components/Comments';
import Config from '../Config.json';
import { SpinnerComponent } from '../components/common';


const Post = () => {

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = Config.postPageTitle;
    setLoading(true);
    axios.get(`${Config.serverURL}/post/${postId}`).then((res) => {
      setPost(res.data.post);
      setComments(res.data.post.comments);
      setLoading(false);
    }).catch(err => {
      navigate('/error.html');
    })
  }, [postId, navigate]);

  return (
    <>
      {loading && <SpinnerComponent />}
      <Box sx={{ marginY: '2rem' }}>
        <Button component={Link} to='/' startIcon={<ArrowBackIcon />}>Back</Button>
        <PostDetail post={post} />
        <CommentSection updateComments={setComments} comments={comments} />
      </Box>
    </>
  )
}

export default Post;
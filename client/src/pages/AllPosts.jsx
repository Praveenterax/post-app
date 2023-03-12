import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@mui/material';
import { PostItem } from '../components/Post';

import Config from '../Config.json';
import { SpinnerComponent } from '../components/common';


const AllPosts = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = Config.postsPageTitle;
    setLoading(true);
    axios.get(`${Config.serverURL}/posts`).then((res) => {
      setPosts(res.data.posts);
      setLoading(false);
    }).catch(err => {
      console.log(err);
      alert('Oops something went wrong');
    })
  }, []);

  const renderPosts = () => {
    return posts.map((post, index) => {
      return (<Grid key={post.id + index} item xs={12} sm={12} md={12}>
        <PostItem key={post._id} post={post} />
      </Grid>)
    })
  };
  return (
    <>
      {loading && <SpinnerComponent />}
      <Typography component='h3' variant='h2' align='center' gutterBottom>Your Feed</Typography>
      {(!posts || posts.length === 0) && <Typography>Currently no posts to display!</Typography>}

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2 }}>
        {renderPosts()}
      </Grid>
    </>
  )
}

export default AllPosts
import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import Config from "../Config.json";

const errorStyle = { width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' };
const ErrorPage = () => {

    useEffect(() => {
        document.title = Config.errorPageTitle;
    }, []);

    return (
        <Box sx={errorStyle}>
            <Typography variant='h2'>404! Page not found</Typography>
            <div style={{ margin: '20px 0px' }}>
                <Typography display='block' textAlign='center' variant='h5'>Oops! An error occured...</Typography>
                <Typography variant='caption'>This page is either removed or does not exist</Typography>
            </div>
            <Typography variant='h6'> Click <Link to='/'>here</Link> to return to homepage! </Typography>
        </Box>
    )
}

export default ErrorPage
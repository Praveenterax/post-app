import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/system';


const RootLayout = () => {
    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        textAlign='center'
                    >
                        Posts App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default RootLayout
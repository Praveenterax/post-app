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
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
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
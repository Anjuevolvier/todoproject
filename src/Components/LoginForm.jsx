import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

const LoginForm = () => {
    return (
        <Box sx={{ p:2, width: '100%', backgroundColor: 'white' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{  display: 'flex', flexDirection: 'column', gap: {xs: '10px', sm: '30px'} }}>
                        <Box sx={{ }}>
                            <Typography>Login</Typography>
                        </Box>
                        <Box sx={{  display: 'flex', flexDirection: 'row', gap: '30px' }}>
                            <img
                                src='/google.png'
                                style={{
                                    width: '45.327px',
                                    height: '45.327px',
                                }} />
                            <img
                                src='/facebook.png'
                                style={{
                                    width: '45.327px',
                                    height: '45.327px',
                                }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography>Anju</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LoginForm
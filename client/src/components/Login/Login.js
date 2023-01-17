import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

async function loginUser(credentials) {
    return fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json());
}

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: '100vh',
                bgcolor: 'primary.main',
            }}
        >
            <Grid item xs={3}>
                <Paper variant="outlined" sx={{ p: 1 }} >
                    <div className="login-wrapper">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <h1>Jeremy's Chat App</h1>
                        </Box>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                required
                                label="Username"
                                onChange={e => setUserName(e.target.value)}
                                sx={{ ml: 1, mr: 1 }}
                            />
                            <br />
                            <TextField
                                required
                                label="Password"
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                sx={{ mt: 1, ml: 1, mr: 1 }}
                            />
                            <Box
                                display="flex"
                                justifyContent="flex-end"
                                alignItems="flex-end"
                            >
                                <Button type="submit" variant="contained" sx={{ mr: 1, mb: 1, mt: 1 }} >
                                    Log In
                                </Button>
                            </Box>
                        </form>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
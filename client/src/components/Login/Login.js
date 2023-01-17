import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8000/api/login', {
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
        <div>
            <div className="login-wrapper">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" required onChange={e => setUserName(e.target.value)} />
                    <br />
                    <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
                    <br />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
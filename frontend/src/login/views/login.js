import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        if (data.success) {
            alert('Login successful');
                // alert(data1.message)
                navigate('/');
          
        } else {
            alert(data.message || 'Invalid credentials');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <div className="links">
                <a href="/forgot-password">Forgot Password?</a>
                <span> | </span>
                <a href="/register">Create an Account</a>
            </div>
        </div>
    );
};

export default LoginForm;


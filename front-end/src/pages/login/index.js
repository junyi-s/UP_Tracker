import React, { useEffect } from 'react';
import './style.css'
const Login = () => {
    useEffect(() => {
        document.title = 'login';
    });
    return (
        <div>
            <h1>Login</h1>
            <p>This is the login page...</p>
        </div>
    );
};
export default Login;
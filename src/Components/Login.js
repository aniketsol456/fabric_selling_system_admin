import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Admin Login</h2>
        <form className="login-form">
          <input type="email" placeholder="Enter your an Email" className="login-input" />
          <input type="password" placeholder="Enter your Password" className="login-input" />
          <button type="submit" className="login-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

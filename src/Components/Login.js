import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
    const navigate = useNavigate();

    const [adminCredentials, setAdminCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = adminCredentials;

        if (!email || !password) {
            alert('Please enter all details');
            return;
        }

        try {
            const res = await axios.post('http://localhost:8009/admin/login', { email, password });

            if (res.status === 201) {
                // document.cookie = `admintoken=${res.data.result.token}; path=/; expires=${new Date(Date.now() + 9000000).toUTCString()}`;
                // document.cookie = `adminid=${res.data.result.userValid.id}; path=/; expires=${new Date(Date.now() + 9000000).toUTCString()}`;
                navigate('/Sidebar');
            }
        } catch (err) {
            alert(err.response?.data.error || 'Something went wrong');
        }
    };

    return (
        <div className='loginPage'>
            <div className="login-container">
                <div className="login-card">
                    <h2 className="login-title">Admin Login</h2>
                    <form className="login-form" onSubmit={handleLogin}>
                        <input
                            type="email"
                            name="email"
                            value={adminCredentials.email}
                            onChange={handleChange}
                            placeholder="Enter your Email"
                            className="login-input"
                        />
                        <input
                            type="password"
                            name="password"
                            value={adminCredentials.password}
                            onChange={handleChange}
                            placeholder="Enter your Password"
                            className="login-input"
                        />
                        <button type="submit" className="login-button">LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;

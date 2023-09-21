import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/login.css';
import { setUserName } from '../app/actions';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      toast.error('Password should be at least 8 characters long.', {
        autoClose: 2000,
      });
      return;
    }

    dispatch(setUserName(username));

    try {
      await new Promise((resolve) => {
        toast.success('Login successful!', {
          autoClose: 1000,
          onClose: resolve,
        });
      });

      navigate('/homepage');
    } catch (error) {
      console.error('Toast error:', error);
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  // Styles for the navbar
  const navbarStyle = {
    backgroundColor:'#333',
    padding: '20px',
    fontStyle: 'italic',
  };

  return (
    <div>
      {/* Navbar */}
      <div style={navbarStyle}>
       <h2 className='dream'><i>Dream maker</i></h2>
      </div>
      {/* Login Form */}
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="register-link">
          Don't have an account?{' '}
          <span className="register-here" onClick={goToRegister}>
            Register here
          </span>
        </p>
        <ToastContainer position="top-right" />
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../../api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/'; 
    } catch (err) {
      alert('Login Failed: Check your credentials');
    }
  };

  return (
    <div className="auth-container" style={{ maxWidth: '400px', margin: '100px auto', padding: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="form-stack">
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
        <button type="submit" className="primary-btn" style={{ width: '100%', marginTop: '10px' }}>Login</button>
      </form>
      <p style={{ marginTop: '20px' }}>Need an account? <Link to="/register">Sign up here</Link></p>
    </div>
  );
}
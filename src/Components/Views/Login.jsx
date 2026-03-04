import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'; // Make sure you have lucide-react installed
import API from '../../api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Only adding this state

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
        <input 
          type="email" 
          placeholder="Email" 
          onChange={e => setEmail(e.target.value)} 
          required 
        />
        
        {/* Wrapper for the password input and eye icon */}
        <div style={{ position: 'relative', width: '100%' }}>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Password" 
            value={password}
            onChange={e => setPassword(e.target.value)} 
            required 
            style={{ paddingRight: '40px', width: '100%' }} 
          />
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#64748b',
              padding: '0',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button type="submit" className="primary-btn" style={{ width: '100%', marginTop: '10px' }}>Login</button>
      </form>
      <p style={{ marginTop: '20px' }}>Need an account? <Link to="/register">Sign up here</Link></p>
    </div>
  );
}
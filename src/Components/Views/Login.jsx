import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'; // Import icons
import API from '../../api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      // Use navigate for a cleaner Single Page App experience
      navigate('/'); 
    } catch (err) {
      alert('Login Failed: Check your credentials');
    }
  };

  return (
    <div className="auth-container">
      <div className="glass-card auth-card">
        <h2>Welcome Back</h2>
        <p>Log in to continue tracking your applications.</p>
        
        <form onSubmit={handleLogin} className="form-stack">
          <input 
            type="email" 
            placeholder="Email" 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
          
          {/* Password Input with Toggle */}
          <div className="password-wrapper" style={{ position: 'relative' }}>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              style={{ paddingRight: '45px' }}
              onChange={e => setPassword(e.target.value)} 
              required 
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '12px',
                top: '35%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                padding: '0'
              }}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button type="submit" className="primary-btn">Login</button>
        </form>
        
        <p className="auth-footer">
          Need an account? <Link to="/register">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}
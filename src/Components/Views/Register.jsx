import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'; // Make sure this is installed
import API from '../../api';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false); // Toggle state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', formData);
      alert('Account created successfully! Please log in.');
      navigate('/login'); 
    } catch (err) {
      alert(`Error: ${err.response?.data?.msg || 'Registration failed'}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="glass-card auth-card">
        <h2>Get Started</h2>
        <p>Join HustleFlow and start tracking your career growth.</p>
        <form onSubmit={handleSubmit} className="form-stack">
          <input 
            type="text" 
            placeholder="Full Name" 
            onChange={e => setFormData({...formData, name: e.target.value})} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            onChange={e => setFormData({...formData, email: e.target.value})} 
            required 
          />
          
          {/* Keep your exact same styling, just add the icon button */}
          <div style={{ position: 'relative', width: '100%' }}>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              onChange={e => setFormData({...formData, password: e.target.value})} 
              required 
              style={{ paddingRight: '40px' }} 
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '40%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#64748b'
              }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button type="submit" className="primary-btn">Sign Up</button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
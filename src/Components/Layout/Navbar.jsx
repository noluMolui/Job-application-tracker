import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload(); 
  };

  return (
    <nav className="nav-header">
      <h1 className="logo" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        HustleFlow
      </h1>

      <div className="nav-links">
        {token ? (
          <>
            <Link to="/">Dashboard</Link>
            <Link to="/analytics">Analytics</Link>
            <Link to="/resources">Resources</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
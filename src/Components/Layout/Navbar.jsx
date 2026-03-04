import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload(); 
  };

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="nav-header">
      <h1 className="logo" style={{ cursor: 'pointer' }} onClick={() => { navigate('/'); closeMenu(); }}>
        HustleFlow
      </h1>

      {/* Hamburger Toggle Button */}
      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {token ? (
          <>
            <Link to="/" onClick={closeMenu}>Dashboard</Link>
            <Link to="/analytics" onClick={closeMenu}>Analytics</Link>
            <Link to="/resources" onClick={closeMenu}>Resources</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={closeMenu}>Login</Link>
            <Link to="/register" onClick={closeMenu}>Register</Link>
          </>
        )}
      </div>
    </header>
  );
}
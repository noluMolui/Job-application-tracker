import React from 'react';

export default function Navbar({ currentView, setView }) {
  const links = ['dashboard', 'analytics', 'resources'];
  return (
    <nav className="nav-header">
      <h1 className="logo">HustleFlow</h1>
      <div className="nav-links">
        {links.map(link => (
          <button key={link} onClick={() => setView(link)} className={currentView === link ? 'active' : ''}>
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}
import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar'; // FIXED IMPORT
import Dashboard from './Components/Views/Dashboard';
import Analytics from './Components/Views/Analytics';
import Resources from './Components/Views/Resources';

export default function App() {
  const [view, setView] = useState('dashboard');
  const [apps, setApps] = useState([]);

  const addApp = (newApp) => {
    // Each app now has a history array for the timeline
    const appWithHistory = { 
      ...newApp, 
      id: Date.now(),
      history: [{ status: newApp.status, date: newApp.date }] 
    };
    setApps([appWithHistory, ...apps]);
  };

  const updateAppStatus = (appId, newStatus) => {
    const today = new Date().toLocaleDateString();
    setApps(apps.map(app => {
      if (app.id === appId) {
        return {
          ...app,
          status: newStatus,
          history: [...app.history, { status: newStatus, date: today }]
        };
      }
      return app;
    }));
  };

  return (
    <div className="container">
      <Navbar currentView={view} setView={setView} />
      {view === 'dashboard' && <Dashboard apps={apps} onAdd={addApp} onUpdate={updateAppStatus} />}
      {view === 'analytics' && <Analytics apps={apps} />}
      {view === 'resources' && <Resources />}
    </div>
  );
}
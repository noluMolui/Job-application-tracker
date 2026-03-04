import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import API from './api';
import './App.css';

import Navbar from './Components/Layout/Navbar';
import Dashboard from './Components/Views/Dashboard';
import Analytics from './Components/Views/Analytics';
import Resources from './Components/Views/Resources';
import Login from './Components/Views/Login';
import Register from './Components/Views/Register';

export default function App() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!localStorage.getItem("token");

  useEffect(() => {
    const loadApps = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await API.get('/applications');
        setApps(res.data);
      } catch (err) {
        console.error("Error loading apps:", err);
      } finally {
        setLoading(false);
      }
    };

    loadApps();
  }, []);

  const onAdd = (newApp) => setApps((prev) => [newApp, ...prev]);

  const onUpdate = async (id, newStatus) => {
    try {
      await API.put(`/applications/${id}`, { status: newStatus });
      setApps((prev) =>
        prev.map((a) =>
          a._id === id ? { ...a, status: newStatus } : a
        )
      );
    } catch {
      alert("Update failed");
    }
  };

 
  const onDelete = async (id) => {
    try {
      await API.delete(`/applications/${id}`);
      
     
      setApps((prev) => prev.filter((app) => app._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete application. Please try again.");
    }
  };

  if (loading && isAuthenticated)
    return <div>Connecting to HustleFlow...</div>;

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              isAuthenticated ? (
                
                <Dashboard 
                  apps={apps} 
                  onAdd={onAdd} 
                  onUpdate={onUpdate} 
                  onDelete={onDelete} 
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route path="/analytics" element={<Analytics apps={apps} />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<Navigate to="/" />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
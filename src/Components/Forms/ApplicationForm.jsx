import React, { useState } from 'react';
import API from '../../api'; 

export default function ApplicationForm({ onAdd }) {
  const [form, setForm] = useState({ 
    company: '', 
    position: '', 
    status: 'Applied', 
    date: new Date().toISOString().split('T')[0] 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.company || !form.position) return;

    try {
      const res = await API.post('/applications', form);
      onAdd(res.data); 
      setForm({ 
        company: '', 
        position: '', 
        status: 'Applied', 
        date: new Date().toISOString().split('T')[0] 
      });
    } catch (err) {
      console.error(err);
      alert('Session expired. Please login again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <input 
        type="text" 
        placeholder="Company" 
        value={form.company} 
        onChange={e => setForm({...form, company: e.target.value})} 
        required 
      />
      <input 
        type="text" 
        placeholder="Position" 
        value={form.position} 
        onChange={e => setForm({...form, position: e.target.value})} 
        required 
      />
      <div className="input-group">
        <label style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', marginBottom: '5px' }}>Date Applied</label>
        <input 
          type="date" 
          value={form.date} 
          onChange={e => setForm({...form, date: e.target.value})} 
        />
      </div>
      <button type="submit" className="primary-btn">Track Application</button>
    </form>
  );
}
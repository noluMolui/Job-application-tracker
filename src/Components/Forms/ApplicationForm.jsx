import React, { useState } from 'react';

export default function ApplicationForm({ onAdd }) {
  const [form, setForm] = useState({ 
    company: '', position: '', status: 'Applied', 
    date: new Date().toISOString().split('T')[0] 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.company) return;
    onAdd(form);
    setForm({ company: '', position: '', status: 'Applied', date: new Date().toISOString().split('T')[0] });
  };

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <input type="text" placeholder="Company" value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
      <input type="text" placeholder="Position" value={form.position} onChange={e => setForm({...form, position: e.target.value})} />
      <div className="input-group">
        <label>Date Applied</label>
        <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
      </div>
      <button type="submit" className="primary-btn">Track Application</button>
    </form>
  );
}
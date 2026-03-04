import React, { useState } from 'react';
import API from '../../api'; 

const ApplicationForm = () => {
  const [formData, setFormData] = useState({ company: '', position: '', status: 'Applied' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/applications', formData);
      setFormData({ company: '', position: '', status: 'Applied' });
    } catch (err) {
      alert('Error: Please login first!');
    }
  };

  return (
    <div className="form-container">
      <h2>Track New Application</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Company Name" 
          value={formData.company} 
          onChange={(e) => setFormData({...formData, company: e.target.value})} 
          required 
        />
        <input 
          type="text" 
          placeholder="Position" 
          value={formData.position} 
          onChange={(e) => setFormData({...formData, position: e.target.value})} 
          required 
        />
        <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})}>
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Rejected">Rejected</option>
          <option value="Offered">Offered</option>
        </select>
        <button type="submit">Save Job</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
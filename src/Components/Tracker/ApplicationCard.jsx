import React from 'react';

export default function ApplicationCard({ app, onUpdate }) {
  return (
    <div className="glass-card card-item">
      <div className="card-top">
        <div>
          <h4>{app.company}</h4>
          <p className="subtitle">{app.position}</p>
        </div>
        <select className={`status-badge ${app.status}`} value={app.status} onChange={(e) => onUpdate(app.id, e.target.value)}>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      <div className="timeline">
        {app.history.map((h, i) => (
          <div key={i} className="timeline-event">
            <span>• {h.status}</span> <small>{h.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
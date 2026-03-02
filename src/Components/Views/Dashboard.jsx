import React from 'react';
import ApplicationForm from '../Forms/ApplicationForm';
import { 
  LayoutDashboard, 
  TrendingUp, 
  CheckCircle2, 
  Clock,
  Briefcase,
  PackageSearch,
  XCircle,
  ExternalLink 
} from 'lucide-react';

export default function Dashboard({ apps, onAdd, onUpdate }) {
  // Stats calculation
  const totalCount = apps.length;
  const interviewCount = apps.filter(a => a.status === 'Interview').length;
  const offerCount = apps.filter(a => a.status === 'Offer').length;
  const rejectedCount = apps.filter(a => a.status === 'Rejected').length;

  return (
    <div className="dashboard-container" style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      
      {/* Top Stats Row */}
      <div className="stats-strip" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '20px', 
        marginBottom: '30px' 
      }}>
        <div className="glass-card"><LayoutDashboard size={18}/> <span>Total: {totalCount}</span></div>
        <div className="glass-card" style={{color: '#2563eb'}}><Clock size={18}/> <span>Interviews: {interviewCount}</span></div>
        <div className="glass-card" style={{color: '#059669'}}><CheckCircle2 size={18}/> <span>Offers: {offerCount}</span></div>
        <div className="glass-card" style={{color: '#e11d48'}}><XCircle size={18}/> <span>Rejected: {rejectedCount}</span></div>
      </div>

      <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '30px', alignItems: 'start' }}>
        
        {/* Left Side: Form */}
        <aside className="glass-card sidebar-form" style={{ position: 'sticky', top: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <Briefcase size={20} color="#7c3aed" />
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Secure the bag.</h2>
          </div>
          <ApplicationForm onAdd={onAdd} />
        </aside>

        {/* Right Side: THE TABLE */}
        <section className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ padding: '20px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between' }}>
             <h3 style={{ margin: 0 }}>Live Tracker</h3>
             <TrendingUp size={18} color="#94a3b8" />
          </div>

          {apps.length === 0 ? (
            <div style={{ padding: '60px', textAlign: 'center' }}>
              <PackageSearch size={40} color="#cbd5e1" />
              <p>No applications yet.</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead style={{ background: '#f8fafc', fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase' }}>
                  <tr>
                    <th style={{ padding: '15px' }}>Company</th>
                    <th>Position</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '0.9rem' }}>
                  {apps.map(app => (
                    <tr key={app.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '15px', fontWeight: 600 }}>{app.company}</td>
                      <td style={{ color: '#64748b' }}>{app.position}</td>
                      <td style={{ color: '#94a3b8' }}>{app.date}</td>
                      <td>
                        <select 
                          className={`status-badge ${app.status}`}
                          value={app.status} 
                          onChange={(e) => onUpdate(app.id, e.target.value)}
                          style={{ padding: '4px 8px', borderRadius: '6px', border: '1px solid #e2e8f0', cursor: 'pointer' }}
                        >
                          <option value="Applied">Applied</option>
                          <option value="Interview">Interview</option>
                          <option value="Offer">Offer</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                      <td>
                        <button style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer' }}>
                          <ExternalLink size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
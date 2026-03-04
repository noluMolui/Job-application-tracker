import React from 'react';
import { BarChart3, Target, Trophy, TrendingUp, Zap } from 'lucide-react';

export default function Analytics({ apps }) {
  const total = apps.length;
  const offers = apps.filter(a => a.status === 'Offer').length;
  const interviews = apps.filter(a => a.status === 'Interview').length;
  const successRate = total > 0 ? ((offers / total) * 100).toFixed(0) : 0;

  return (
    <div className="analytics-container" style={{ display: 'flex', flexDirection: 'column', gap: '25px',  }}>
      <div className="glass-card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <BarChart3 size={24} color="#7c3aed" />
          <h2 style={{ margin: 0 }}>Success Metrics</h2>
        </div>

        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div className="stat-box" style={{ background: '#f8fafc', padding: '20px', borderRadius: '18px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Target size={20} color="#64748b" style={{ marginBottom: '10px' }} />
            <h1 style={{ margin: '0', fontSize: '2.5rem', color: '#1e293b' }}>{total}</h1>
            <p style={{ margin: 0, color: '#64748b', fontWeight: 600 }}>Total Pursuits</p>
          </div>

          <div className="stat-box" style={{ background: '#f5f3ff', padding: '20px', borderRadius: '18px', border: '1px solid #ddd6fe', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Zap size={20} color="#7c3aed" style={{ marginBottom: '10px' }} />
            <h1 style={{ margin: '0', fontSize: '2.5rem', color: '#7c3aed' }}>{interviews}</h1>
            <p style={{ margin: 0, color: '#7c3aed', fontWeight: 600 }}>Interviews</p>
          </div>

          <div className="stat-box" style={{ background: '#ecfdf5', padding: '20px', borderRadius: '18px', border: '1px solid #a7f3d0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Trophy size={20} color="#059669" style={{ marginBottom: '10px' }} />
            <h1 style={{ margin: '0', fontSize: '2.5rem', color: '#059669' }}>{offers}</h1>
            <p style={{ margin: 0, color: '#059669', fontWeight: 600 }}>Offers</p>
          </div>

          <div className="stat-box" style={{ background: '#eff6ff', padding: '20px', borderRadius: '18px', border: '1px solid #bfdbfe', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TrendingUp size={20} color="#2563eb" style={{ marginBottom: '10px' }} />
            <h1 style={{ margin: '0', fontSize: '2.5rem', color: '#2563eb' }}>{successRate}%</h1>
            <p style={{ margin: 0, color: '#2563eb', fontWeight: 600 }}>Conversion Rate</p>
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center', color: '#64748b' }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
           Tip: Applications with detailed notes have a <strong>25% higher</strong> interview rate.
        </p>
      </div>
    </div>
  );
}
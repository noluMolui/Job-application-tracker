import React from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  FileText, 
  Video, 
  MessageSquare, 
  Lightbulb 
} from 'lucide-react';

export default function Resources() {
  const categories = [
    {
      title: "Interview Prep",
      icon: <Video size={20} color="#7c3aed" />,
      items: [
        { name: "Mastering Behavioral Questions", type: "Video" },
        { name: "Mock Interview Checklist", type: "PDF" }
      ]
    },
    {
      title: "Technical Skills",
      icon: <FileText size={20} color="#2563eb" />,
      items: [
        { name: "System Design Fundamentals", type: "Guide" },
        { name: "React Performance Optimization", type: "Article" }
      ]
    },
    {
      title: "Resume & Portfolio",
      icon: <Lightbulb size={20} color="#059669" />,
      items: [
        { name: "ATS-Friendly Templates", type: "Link" },
        { name: "Portfolio Review Guide", type: "PDF" }
      ]
    }
  ];

  return (
    <div className="resources-container" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
      {/* Header Section */}
      <div className="glass-card" style={{ padding: '2rem', background: 'linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
          <BookOpen size={28} color="#7c3aed" />
          <h2 style={{ margin: 0 }}>Mentee Resource Library</h2>
        </div>
        <p style={{ color: '#64748b', margin: 0 }}>
          A curated collection of materials to help your mentees secure the bag.
        </p>
      </div>

      {/* Categories Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px' 
      }}>
        {categories.map((cat, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
              {cat.icon}
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{cat.title}</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cat.items.map((item, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '10px',
                  borderRadius: '10px',
                  background: '#f8fafc',
                  border: '1px solid #f1f5f9',
                  transition: '0.2s'
                }} className="resource-item">
                  <div>
                    <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600 }}>{item.name}</p>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.type}</span>
                  </div>
                  <ExternalLink size={16} color="#cbd5e1" style={{ cursor: 'pointer' }} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Community Callout */}
      <div className="glass-card" style={{ 
        padding: '1.5rem', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '10px',
        border: '1px dashed #7c3aed',
        background: '#fdfaff'
      }}>
        <MessageSquare size={18} color="#7c3aed" />
        <p style={{ margin: 0, color: '#7c3aed', fontWeight: 600, fontSize: '0.9rem' }}>
          Need more help? Join the community Slack for 1-on-1 support.
        </p>
      </div>
    </div>
  );
}
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
        { name: "The STAR Method Guide", type: "Article", url: "https://www.themuse.com/" },
        { name: "Common Coding Patterns", type: "Guide", url: "https://github.com/Chanda-Abdul/Software-Engineering-Interview-Resources" }
      ]
    },
    {
      title: "Technical Skills",
      icon: <FileText size={20} color="#2563eb" />,
      items: [
        { name: "System Design Primer", type: "GitHub", url: "https://github.com/donnemartin/system-design-primer" },
        { name: "Frontend Developer Roadmap", type: "Link", url: "https://roadmap.sh/frontend" }
      ]
    },
    {
      title: "Resume & Portfolio",
      icon: <Lightbulb size={20} color="#059669" />,
      items: [
        { name: "ATS-Friendly Template", type: "Download", url: "https://www.overleaf.com/latex/templates/jakes-resume/syzrnksghjzh" },
        { name: "Portfolio Best Practices", type: "Guide", url: "https://www.freecodecamp.org/news/how-to-build-a-portfolio-website/" }
      ]
    }
  ];

  return (
    <div className="resources-container" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
      <div className="glass-card" style={{ padding: '2rem', background: 'linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%)', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
          <BookOpen size={28} color="#7c3aed" />
          <h2 style={{ margin: 0 }}>Career Resource Library</h2>
        </div>
        <p style={{ color: '#64748b', margin: 0 }}>
          Essential tools and guides to help you land your next role.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px' 
      }}>
        {categories.map((cat, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '1.5rem', borderRadius: '15px', border: '1px solid #e2e8f0', background: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
              {cat.icon}
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{cat.title}</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cat.items.map((item, i) => (
                <a 
                  key={i} 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '10px',
                    borderRadius: '10px',
                    background: '#f8fafc',
                    border: '1px solid #f1f5f9',
                    cursor: 'pointer'
                  }} className="resource-item">
                    <div>
                      <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600 }}>{item.name}</p>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.type}</span>
                    </div>
                    <ExternalLink size={16} color="#7c3aed" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
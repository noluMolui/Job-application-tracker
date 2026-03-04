import React from "react";
import ApplicationForm from "../Forms/ApplicationForm";
import {
  LayoutDashboard, TrendingUp, CheckCircle2,
  Clock, Briefcase, PackageSearch, XCircle, Trash2
} from "lucide-react";

export default function Dashboard({ apps, onAdd, onUpdate, onDelete }) {
  const totalCount = apps.length;
  const interviewCount = apps.filter((a) => a.status === "Interview").length;
  const offerCount = apps.filter((a) => a.status === "Offer").length;
  const rejectedCount = apps.filter((a) => a.status === "Rejected").length;

  const getStatusStyle = (status) => {
    switch (status) {
      case "Interview": return { backgroundColor: "#dbeafe", color: "#2563eb", border: "1px solid #bfdbfe" };
      case "Offer": return { backgroundColor: "#dcfce7", color: "#059669", border: "1px solid #bbf7d0" };
      case "Rejected": return { backgroundColor: "#fee2e2", color: "#e11d48", border: "1px solid #fecaca" };
      default: return { backgroundColor: "#f1f5f9", color: "#64748b", border: "1px solid #e2e8f0" };
    }
  };

  return (
    <div className="dashboard-container">
      <div className="stats-strip">
        <div className="glass-card stat-card">
          <LayoutDashboard size={18} color="#64748b" />
          <span>Total: {totalCount}</span>
        </div>
        <div className="glass-card stat-card" style={{ color: "#2563eb" }}>
          <Clock size={18} /> <span>Interviews: {interviewCount}</span>
        </div>
        <div className="glass-card stat-card" style={{ color: "#059669" }}>
          <CheckCircle2 size={18} /> <span>Offers: {offerCount}</span>
        </div>
        <div className="glass-card stat-card" style={{ color: "#e11d48" }}>
          <XCircle size={18} /> <span>Rejected: {rejectedCount}</span>
        </div>
      </div>

      <div className="dashboard-grid">
        <aside className="glass-card sidebar-form">
          <div className="form-header">
            <Briefcase size={20} color="#7c3aed" />
            <h2 style={{ margin: 0, fontSize: "1.1rem" }}>Secure the bag.</h2>
          </div>
          <ApplicationForm onAdd={onAdd} />
        </aside>

        <section className="glass-card tracker-container">
          <div className="tracker-header">
            <h3 style={{ margin: 0 }}>Live Tracker</h3>
            <TrendingUp size={18} color="#94a3b8" />
          </div>

          <div className="table-responsive">
            {apps.length === 0 ? (
              <div style={{ padding: "60px", textAlign: "center" }}>
                <PackageSearch size={40} color="#cbd5e1" />
                <p>No applications yet.</p>
              </div>
            ) : (
              <table className="application-table">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th style={{ textAlign: "right" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {apps.map((app) => (
                    <tr key={app._id}>
                      <td className="company-cell">{app.company}</td>
                      <td>{app.position}</td>
                      <td>{new Date(app.date).toLocaleDateString()}</td>
                      <td>
                        <select
                          value={app.status}
                          onChange={(e) => onUpdate(app._id, e.target.value)}
                          className="status-select"
                          style={getStatusStyle(app.status)}
                        >
                          <option value="Applied">Applied</option>
                          <option value="Interview">Interview</option>
                          <option value="Offer">Offer</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <button 
                          className="delete-btn"
                          onClick={() => window.confirm("Delete?") && onDelete(app._id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
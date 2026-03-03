import React from "react";
import ApplicationForm from "../Forms/ApplicationForm";
import {
  LayoutDashboard,
  TrendingUp,
  CheckCircle2,
  Clock,
  Briefcase,
  PackageSearch,
  XCircle,
  ExternalLink,
  Trash2,
} from "lucide-react";

export default function Dashboard({ apps, onAdd, onUpdate, onDelete }) {
  const totalCount = apps.length;
  const interviewCount = apps.filter((a) => a.status === "Interview").length;
  const offerCount = apps.filter((a) => a.status === "Offer").length;
  const rejectedCount = apps.filter((a) => a.status === "Rejected").length;

  const getStatusStyle = (status) => {
    switch (status) {
      case "Interview":
        return {
          backgroundColor: "#dbeafe",
          color: "#2563eb",
          border: "1px solid #bfdbfe",
        };
      case "Offer":
        return {
          backgroundColor: "#dcfce7",
          color: "#059669",
          border: "1px solid #bbf7d0",
        };
      case "Rejected":
        return {
          backgroundColor: "#fee2e2",
          color: "#e11d48",
          border: "1px solid #fecaca",
        };
      default:
        return {
          backgroundColor: "#f1f5f9",
          color: "#64748b",
          border: "1px solid #e2e8f0",
        };
    }
  };

  return (
    <div
      className="dashboard-container"
      style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto" }}
    >
      <div
        className="stats-strip"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          className="glass-card"
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          <LayoutDashboard size={18} color="#64748b" />{" "}
          <span>Total: {totalCount}</span>
        </div>
        <div
          className="glass-card"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#2563eb",
          }}
        >
          <Clock size={18} /> <span>Interviews: {interviewCount}</span>
        </div>
        <div
          className="glass-card"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#059669",
          }}
        >
          <CheckCircle2 size={18} /> <span>Offers: {offerCount}</span>
        </div>
        <div
          className="glass-card"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#e11d48",
          }}
        >
          <XCircle size={18} /> <span>Rejected: {rejectedCount}</span>
        </div>
      </div>

      <div className="dashboard-grid">
        <aside className="glass-card sidebar-form">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <Briefcase size={20} color="#7c3aed" />
            <h2 style={{ margin: 0, fontSize: "1.1rem" }}>Secure the bag.</h2>
          </div>
          <ApplicationForm onAdd={onAdd} />
        </aside>
        <section
          className="glass-card tracker-container"
          style={{ padding: "0", overflow: "hidden" }}
        >
          <div
            style={{
              padding: "20px",
              borderBottom: "1px solid #f1f5f9",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "left",
                }}
              >
                <thead
                  style={{
                    background: "#f8fafc",
                    fontSize: "0.8rem",
                    color: "#64748b",
                    textTransform: "uppercase",
                  }}
                >
                  <tr>
                    <th style={{ padding: "15px" }}>Company</th>
                    <th>Position</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "0.9rem" }}>
                  {apps.map((app) => (
                    <tr
                      key={app._id}
                      style={{ borderBottom: "1px solid #f1f5f9" }}
                    >
                      <td style={{ padding: "15px", fontWeight: 600 }}>
                        {app.company}
                      </td>
                      <td style={{ color: "#64748b" }}>{app.position}</td>
                      <td style={{ color: "#94a3b8" }}>
                        {new Date(app.date).toLocaleDateString()}
                      </td>
                      <td>
                        <select
                          value={app.status}
                          onChange={(e) => onUpdate(app._id, e.target.value)}
                          style={{
                            ...getStatusStyle(app.status),
                            padding: "6px 12px",
                            borderRadius: "20px",
                            fontSize: "0.75rem",
                            fontWeight: "600",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            outline: "none",
                          }}
                        >
                          <option value="Applied">Applied</option>
                          <option value="Interview">Interview</option>
                          <option value="Offer">Offer</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                      <td style={{ padding: "15px" }}>
                        <div
                          style={{
                            display: "flex",
                            gap: "12px",
                            alignItems: "center",
                          }}
                        >
                          <button
                            onClick={() =>
                              window.confirm("Delete this?") &&
                              onDelete(app._id)
                            }
                            style={{
                              background: "none",
                              border: "none",
                              color: "#f87171",
                              cursor: "pointer",
                            }}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
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

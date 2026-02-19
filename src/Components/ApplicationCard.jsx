function ApplicationCard({ application }) {
  return (
    <div className="card">
      <h3>{application.company}</h3>
      <p>{application.position}</p>
      <p>Status: {application.status}</p>
    </div>
  );
}

export default ApplicationCard;

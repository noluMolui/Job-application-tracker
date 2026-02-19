import ApplicationCard from "./ApplicationCard";

function ApplicationList() {
  const dummyData = [
    {
      id: 1,
      company: "Google",
      position: "Frontend Intern",
      status: "Applied",
    },
    {
      id: 2,
      company: "Amazon",
      position: "Junior Developer",
      status: "Interview",
    },
  ];

  return (
    <div>
      <h2>My Applications</h2>

      {dummyData.map((app) => (
        <ApplicationCard key={app.id} application={app} />
      ))}
    </div>
  );
}

export default ApplicationList;

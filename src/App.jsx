import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";

function App() {
  return (
    <div className="container">
      <h1>Job Application Tracker</h1>
      <ApplicationForm />
      <ApplicationList />
    </div>
  );
}

export default App;


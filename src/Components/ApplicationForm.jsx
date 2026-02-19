function ApplicationForm() {
  return (
    <div className="form">
      <h2>Add Application</h2>

      <input type="text" placeholder="Company Name" />
      <input type="text" placeholder="Position" />
      <input type="date" />
      <select>
        <option>Applied</option>
        <option>Interview</option>
        <option>Rejected</option>
        <option>Offer</option>
      </select>

      <textarea placeholder="Notes"></textarea>

      <button>Add</button>
    </div>
  );
}

export default ApplicationForm;

import { useState } from "react";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({
    name: "",
    service: "",
    date: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAppointments([...appointments, form]);
    setForm({ name: "", service: "", date: "" });
  }

  return (
    <div className="container">
      <h2>Book an Appointment</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <select
          className="form-control my-2"
          name="service"
          value={form.service}
          onChange={handleChange}
        >
          <option value="">Select Service</option>
          <option value="General Checkup">General Checkup</option>
          <option value="Dental">Dental</option>
          <option value="Pediatrics">Pediatrics</option>
        </select>

        <input
          type="date"
          className="form-control my-2"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        <button className="btn btn-primary">Submit</button>
      </form>

      <h3 className="mt-4">Your Appointments:</h3>
      <ul>
        {appointments.map((a, i) => (
          <li key={i}>
            {a.name} — {a.service} — {a.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appointments;
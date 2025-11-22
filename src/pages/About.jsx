import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";

function About() {
  return (
    <div className="container mt-4">
      <h1>About SmartCare Clinic</h1>
      <p>
        SmartCare Clinic was established to provide fast and affordable healthcare.
        Our team includes experienced doctors in multiple medical fields.
      </p>

      <h2 className="mt-4">Our Doctors</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div>
          <img src={about1} alt="Doctor" style={{ width: "200px", borderRadius: "10px" }} />
          <p>Dr. Sara Haddad — General Practitioner</p>
        </div>

        <div>
          <img src={about2} alt="Doctor" style={{ width: "200px", borderRadius: "10px" }} />
          <p>Dr. Fadi Issa — Dentist</p>
        </div>
      </div>
    </div>
  );
}

export default About;
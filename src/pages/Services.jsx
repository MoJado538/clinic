import services1 from "../assets/services1.png";
import services2 from "../assets/services2.png";

function Services() {
  return (
    <div className="container mt-4">
      <h1>Our Services</h1>

      <div style={{ marginTop: "20px" }}>
        <h4>General Checkup</h4>
        <img src={services1} alt="services1" style={{ width: "300px", borderRadius: "10px" }} />
        <p>Full medical checkup by our professional GP.</p>

        <h4 className="mt-4">Dental Care</h4>
        <img src={services2} alt="services2" style={{ width: "300px", borderRadius: "10px" }} />
        <p>Teeth cleaning, extraction, whitening and more.</p>
      </div>
    </div>
  );
}

export default Services;
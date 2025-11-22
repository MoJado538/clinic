import home from "../assets/home.png";

function Home() {
  return (
    <div className="container mt-4">
      <h1 className="text-primary">SmartCare Clinic</h1>
      <p className="lead">
        Welcome to SmartCare Clinic. We offer trusted medical services with professional doctors.
      </p>

      <img
        src={home}
        alt="home"
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h2 className="mt-4">Why Choose Us?</h2>
      <ul>
        <li>Professional and friendly doctors</li>
        <li>Fast appointment booking</li>
        <li>Modern and clean medical equipment</li>
      </ul>
    </div>
  );
}

export default Home;
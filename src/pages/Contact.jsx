import contact from "../assets/contact.png";

function Contact() {
  return (
    <div className="container mt-4">
      <h1>Contact Us</h1>

      <p><strong>Phone:</strong> +961 70 123 456</p>
      <p><strong>Email:</strong> smartcareclinic@email.com</p>
      <p><strong>Location:</strong> Beirut, Lebanon</p>

      <h3 className="mt-4">Our Location</h3>
      <img
        src={contact}
        alt="contact"
        style={{ width: "100%", maxHeight: "400px", borderRadius: "10px" }}
      />
    </div>
  );
}

export default Contact;
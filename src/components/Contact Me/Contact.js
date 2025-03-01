import React from "react";
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section className="Contactus" id="Contact">
      <div className="skillTitle">Contact</div>
      <div className="concontent">
        {/* Embedded Google Map */}
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116935.6154702749!2d86.03672063954873!3d23.667445914277888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4230341010871%3A0xf89f21d9001d5036!2sBokaro%20Steel%20City%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1715779187616!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>

        {/* Contact Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="form">
            <h3 className="conhead">Contact Me!</h3>
            <div className="inputbox">
              <span className="fas fa-user"></span>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputbox">
              <span className="fas fa-envelope"></span>
              <input 
                type="email" 
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputbox">
              <span className="fas fa-phone"></span>
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="hire">Connect Now</button>
          </form>
        ) : (
          <div className="form">
            <h3 className="conhead">Thank you!</h3>
            <p>I have received your details, will contact you soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
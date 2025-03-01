import React from 'react';
import './social.css';
const social = () => {
  return (
    <>
    <div className="share">
      <a href="https://www.facebook.com/share/14v23BWVRF/" className="fab fa-facebook" aria-label="Facebook"></a>
      <a href="https://www.instagram.com/_.aiman._1212/?hl=en" className="fab fa-instagram" aria-label="Instagram"></a>
      <a href="https://www.linkedin.com/in/aiman-ashna-19a082308" className="fab fa-linkedin" aria-label="LinkedIn"></a>
    </div>
    <div className="contact-info">
      <div className="email">
        <i className="fas fa-envelope"></i>
        <span>aimanashna12@gmail.com</span>
      </div>
      <div className="phone">
        <i className="fas fa-phone"></i>
        <span>+91 9693787114</span>
      </div>
    </div>
    </>
  )
}

export default social
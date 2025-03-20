import React from "react";
import "./footer.css";
function footer(){
   return(
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h3>Our Services</h3>
        <ul>
          <li><a href="#service1">Service 1</a></li>
          <li><a href="#service2">Service 2</a></li>
          <li><a href="#service3">Service 3</a></li>
          <li><a href="#service4">Service 4</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <ul>
          <li>
            <a href="mailto:contact@example.com">Email</a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </li>
          <li>
            <a href="#complaint">File a Complaint</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2025 Your Company. All rights reserved.</p>
    </div>
  </footer>
   )
}
export default footer;
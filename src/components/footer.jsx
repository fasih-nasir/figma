import React from 'react';
import logo from "../pages/images/logo.png"

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container text-center">
        {/* Logo and Tagline */}
        <div className="mb-4 d-flex justify-content-center align-items-center flex-column">
          <img
            src={logo}
            alt="TOTC logo"
            className="mb-3"
            style={{ width: '80px' }}
          />
          <h4 className="mb-0">Virtual Class for Zoom</h4>
        </div>

        {/* Newsletter Section */}
        <div className="mb-4">
          <h5>Subscribe to get our Newsletter</h5>
          <div className="d-flex justify-content-center">
            <input
              type="email"
              className="form-control me-2"
              placeholder="Your Email"
              style={{ maxWidth: '300px' }}
            />
            <button className="login">Subscribe</button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mb-3">
          <a href="#" className="text-muted me-3">Careers</a>
          <a href="#" className="text-muted me-3">Privacy Policy</a>
          <a href="#" className="text-muted">Terms & Conditions</a>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-muted">
          © 2021 Class Technologies Inc.
        </div>
      </div>
    </footer>
  );
}

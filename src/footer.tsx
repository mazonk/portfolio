import React from 'react';
import './Footer.css'; // Custom styles for the footer

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Copyright Notice */}
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Katarína Brezániová. All rights reserved.</p>
        
        {/* Contact Section */}
        <div className="footer-contacts">
          <a href="https://https://github.com/mazonk" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:katkabrezani@gmail.com">
            Email
          </a>
          <a href="https://www.linkedin.com/in/katarína-brezániová/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

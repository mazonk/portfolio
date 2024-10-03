import React from 'react';
import './Footer.css'; // Custom styles for the footer
import basePath from './imageRoute';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="buy-me-a-coffee">
        <a href="https://buymeacoffee.com/katiekatie" target="_blank" rel="noopener noreferrer">
        <img src={`..${basePath}/assets/bmc-button.png`} alt="Coffee Icon" className="coffee-icon" />
        
        </a>
      </div>
      
      {/* Contact Section */}
      <div className="footer-content">
        <div className="footer-contacts">Get in touch with me:
          <a href="https://github.com/mazonk" target="_blank" rel="noopener noreferrer">
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
      
      {/* Copyright Notice */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Katarína Brezániová. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

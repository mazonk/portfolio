import React from 'react';
import './Footer.css'; // Custom styles for the footer
import basePath from './imageRoute';

const Footer: React.FC = () => {
  return (
    <footer className="footer">  
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Katarína Brezániová.</p>
      </div>
      <div className="footer-content">
        <div className="footer-contacts">
          <a href="https://github.com/mazonk" target="_blank" rel="noopener noreferrer" className="contact-button">
            <img src={`..${basePath}/assets/github.png`} alt="GitHub" className="icon" />
          </a>
          <a href="mailto:katkabrezani@gmail.com" className="contact-button">
            <img src={`..${basePath}/assets/email.png`} alt="Email" className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/katarína-brezániová/" target="_blank" rel="noopener noreferrer" className="contact-button">
            <img src={`..${basePath}/assets/in.png`} alt="LinkedIn" className="icon" />
          </a>
        </div>
      </div>
      <div className="buy-me-a-coffee">
        <a href="https://buymeacoffee.com/katiekatie" target="_blank" rel="noopener noreferrer">
          <img src={`..${basePath}/assets/bmc-button.png`} alt="Coffee Icon" className="coffee-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

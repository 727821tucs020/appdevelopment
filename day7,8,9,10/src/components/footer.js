// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerContent = (
    <div className="footer-content">
      <div className="footer-links">
        <ul className="links-list">
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link to="/terms">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="footer-social">
        <h3>Follow Us On</h3>
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com/planevent/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/BizBash" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/eventiaevents/?hl=en" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <footer className="footer">
      {footerContent}
      <p className="copyright">© {new Date().getFullYear()} DreamMaker. All Rights Reserved.</p>
      <style jsx>{`
        .footer {
          background-color: #333;
          color: #fff;
          padding: 30px;
          margin-top:55px;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .footer-links, .footer-social {
          flex: 1;
        }

        .footer-links h3, .footer-social h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .links-list {
          list-style: none;
          padding: 0;
        }

        .links-list li {
          margin-bottom: 10px;
        }

        .links-list a {
          color: #fff;
          text-decoration: none;
        }

        .links-list a:hover {
          text-decoration: underline;
        }

        .social-icons {
          list-style: none;
          padding: 0;
        }

        .social-icons li {
          display: inline-block;
          margin-right: 10px;
        }

        .social-icons a {
          color: #fff;
          font-size: 24px;
          text-decoration: none;
        }

        .copyright {
          font-size: 14px;
          text-align: center;
          margin-top: 20px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

// import React from 'react';
import './Landing.css'; 
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'; 
import landing1 from '../../Assets/landing1.png'
import landing2 from '../../Assets/landing2.png'
import twitter from '../../Assets/mdi_twitter.png'
import youtube from '../../Assets/mdi_youtube.png'
import instagram from '../../Assets/uil_instagram-alt.png'
import facebook from '../../Assets/ri_facebook-fill.png'

// Define the Landing component
const Landing = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>CO2 Prints</title>
        <link rel="stylesheet" href="landing.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="landing-content">
        <div className="landing-container">
          {/* Navigation */}
          <nav>
            <div className="nav">
              <div className="logo-container">
                <img className="nav-logo" src={logo} alt="Logo" />
              </div>
              <div className="header">
                <div className="nav-bar">
                  <Link to="/" className="nav-link">About</Link>
                  <Link to="/pricing" className="nav-link">Pricing</Link>
                  <Link to="/register" className="nav-link">Sign Up</Link>
                  <Link to="/login" className="nav-link">Login</Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Divider Line */}
          <div className="line"></div>

          {/* Landing Body */}
          <div className="landing-body">
            <img className="landing-img1" src={landing1} alt="Landing 1" />
            <img className="landing-img2" src={landing2} alt="Landing 2" />

            {/* About Section 1 */}
            <div className="about1">
              <p>
                At CO2 Prints, we&apos;re on a mission to drive sustainability through innovation.
                Our vision is to empower businesses to make a positive impact on the environment
                without compromising operational efficiency.
              </p>
            </div>

            {/* About Section 2 */}
            <div className="about2">
              <p>Aggregate and analyze diverse data sources, from energy bills to supply chain records, in a unified platform.</p>
              <p>Stay ahead with real-time monitoring of key metrics and receive alerts for significant changes.</p>
              <p>Compare your carbon footprint against industry standards and peers, gaining valuable insights.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer>
          <div className="footer-container">
            {/* Footer Left Section */}
            <div className="footer-section" id="footer-left-section">
              <div className="footer-content">
                <div id="footer-logo" className="footer-heading">CO2 Prints</div>
                <div className="footer-disc">
                  Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div className="social-icons">
                <div className="social-icon"><a href="."><img src={twitter} alt="Twitter" /></a></div>
                <div className="social-icon"><a href="."><img src={youtube} alt="YouTube" /></a></div>
                <div className="social-icon"><a href="."><img src={facebook} alt="Facebook" /></a></div>
                <div className="social-icon"><a href="."><img src={instagram} /></a></div>
              </div>
              <div className="copyright">© 2023 CO2 Prints. All Rights Reserved.</div>
            </div>

            {/* Footer Right Section */}
            <div className="footer-section" id="footer-right-section">
              <div className="footer-content">
                <div className="footer-heading">Quick Links</div>
                <div className="divider"></div>
                <div className="footer-link">
                  <div className="link-text"> &nbsp;<a href="#">About</a></div>
                </div>
                <div className="footer-link">
                  <div className="link-text"> &nbsp;<a href="#">Calculator</a></div>
                </div>
                <div className="footer-link">
                  <div className="link-text"> &nbsp;<a href="#">AI Insights</a></div>
                </div>
                <div className="footer-link">
                  <div className="link-text"> &nbsp;<a href="#">Pricing</a></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );}

  export default Landing

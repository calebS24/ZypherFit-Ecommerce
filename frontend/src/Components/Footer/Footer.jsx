import React from "react";
import "./Footer.css";
import downloadapp from "../Assets/downloadapp.png"
import logo from "../Assets/newlogoresized.png"

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <img src={logo} alt="Logo" />
          </div>
          <div className="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download App for Android and iOS</p>
            <img src={downloadapp} alt="App Logo" />
          </div>
          <div className="footer-col-1">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="#">Coupons</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
              <li>
                <a href="#">Referrals</a>
              </li>
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="/Contact">Store Finder</a>
              </li>
            </ul>
          </div>
          <div className="footer-col-1">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="mailto:calebsvarghese@gmail.com">Gmail</a>
              </li>
              <li>
                <a href="https://www.instagram.com/caleb.shaji.cs/">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/calebsv">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.github.com/calebS24">Github</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">YouTube</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />



        
      </div>
      <div className = "copyright-box">
        <p>© 2024 ZypherFit Store |  All Rights Reserved</p>
        </div>
    </div>
    
  );
}

export default Footer;

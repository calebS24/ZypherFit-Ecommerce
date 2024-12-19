import React from "react";
import "./Hero.css";
import hero_image from "../Assets/ai2.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
        <h1>Gear Up for Greatness!</h1>
        <p>
              Don't wait to achieve your fitness goals. Start today with our
              high-quality sportswear. Shop now and experience the difference!
          </p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;

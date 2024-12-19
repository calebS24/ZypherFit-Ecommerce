import React from "react";
import "./CSS/About.css";
import aboutUsImage from "../Components/Assets/about-us.jpeg";
import teamMember1 from "../Components/Assets/team-member-1.jpeg";
import teamMember2 from "../Components/Assets/team-member-2.jpeg";
import teamMember3 from "../Components/Assets/team-member-3.jpeg";

function About() {
  return (
    <div>
      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <h1 className="title">About ZypherFit</h1>
          <div className="row">
            <div className="col-2">
              <img
                src={aboutUsImage}
                alt="About ZypherFit"
                className="about-img"
                width="600px"
              />
            </div>
            <div className="col-2">
              <h3>Who We Are</h3>
              <p>
                ZypherFit is a leading sports clothing brand designed to provide
                athletes and fitness enthusiasts with premium apparel and
                accessories. Our mission is to combine performance, style, and
                comfort in every product we offer, helping you to feel empowered
                during every workout.
              </p>
              <br />
              <h3>Our Story</h3>
              <p>
                Founded in 2024, ZypherFit began as a small startup with a big
                vision. Our focus was simple: create clothing that performs as
                hard as you do. From humble beginnings, we've grown into a
                globally recognized brand known for innovation, quality, and
                performance.
              </p>
              <br />
              <h3>Our Promise</h3>
              <ul>
                <li>
                  <b>High-Quality Materials:</b> We only use the best fabrics
                  and materials to ensure durability and comfort.
                </li>
                <li>
                  <b>Performance-Driven Design:</b> Our apparel is designed with
                  the athlete in mind, from fit to functionality.
                </li>
                <li>
                  <b>Eco-Friendly Practices:</b> We are committed to
                  sustainability, using environmentally friendly processes
                  wherever possible.
                </li>
              </ul>
              <a href="products.html" className="btn">
                Explore Our Products →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="title">Meet Our Team</h2>
          <div className="row">
            <div className="col-3">
              <img
                src={teamMember1}
                alt="James Johnson"
                className="team-img"
              />
              <h4>James Johnson</h4>
              <p>Founder &amp; CEO</p>
            </div>
            <div className="col-3">
              <img
                src={teamMember2}
                alt="Sarah Lee"
                className="team-img"
              />
              <h4>Sarah Lee</h4>
              <p>Head of Product Development</p>
            </div>
            <div className="col-3">
              <img
                src={teamMember3}
                alt="Houston Smith"
                className="team-img"
              />
              <h4>Houston Smith</h4>
              <p>Marketing Director</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;

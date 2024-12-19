import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./CSS/Contact.css";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mzzblgvw");

  return (
    <div>
      {/* Contact Header */}
      <div className="contactus-header">
        <h1>Contact Us</h1>
        <p>You're welcome to message us!</p>
      </div>

      {/* Contact Section */}
      <div className="contactus-container">
        {/* Map Column */}
        <div className="contactus-column contactus-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62876.16049933098!2d76.22014753256529!3d9.953912992575242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1728506940519!5m2!1sen!2sin"
            loading="lazy"
            title="Kochi Map"
          ></iframe>
        </div>

        {/* Contact Form Column */}
        <div className="contactus-column contactus-form">
          {state.succeeded ? (
            <p className="success-message">Thanks for contacting us!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Row: Name and Email */}
              <div className="input-row">
                {/* Name */}
                <div className="input-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              {/* Row: Sex and Age */}
              <div className="input-row">
                {/* Sex */}
                <div className="input-group">
                  <label htmlFor="sex">Sex</label>
                  <select id="sex" name="sex" required>
                    <option value="" disabled selected>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {/* Age */}
                <div className="input-group">
                  <label htmlFor="age">Age</label>
                  <input
                    id="age"
                    type="number"
                    name="age"
                    placeholder="Your Age"
                    min="1"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit phone number"
                required
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />

              {/* Message */}
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              {/* Submit */}
              <button type="submit" disabled={state.submitting}>
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

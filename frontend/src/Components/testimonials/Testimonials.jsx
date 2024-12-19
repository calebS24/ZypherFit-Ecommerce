import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./Testimonials.css";
import avatar2 from "../Assets/avatar-2.jpeg";
import avatar1 from "../Assets/avatar-1.jpeg";
import avatar3 from "../Assets/avatar-3.jpeg";
import avatar4 from "../Assets/avatar-4.jpeg";
import avatar5 from "../Assets/avatar-5.jpeg";
import avatar6 from "../Assets/avatar-6.jpeg";

function Testimonials() {
  const testimonials = [
    {
      text: "The compression leggings I bought are fantastic! Highly recommend for comfort and style!",
      name: "Sarah Williams",
      img: avatar2,
      rating: 4,
    },
    {
      text: "I recently purchased the moisture-wicking running shirt, and it's a game changer!",
      name: "Isaac James",
      img: avatar1,
      rating: 5,
    },
    {
      text: "I love my new athletic jacket! It's warm but breathable. Definitely worth the investment!",
      name: "Lydia Fernandez",
      img: avatar3,
      rating: 4,
    },
    {
      text: "The breathable workout gloves I purchased have transformed my gym sessions. No more sweaty hands or slipping weights! They're durable and offer a great grip.",
      name: "Ashlin Benny",
      img: avatar4,
      rating: 5,
    },
    {
      text: "The lightweight trail running shoes I got are perfect for outdoor adventures! They provide excellent grip, support, and are super comfortable for long runs. Highly recommended for avid runners.",
      name: "Sharon Matthew",
      img: avatar6,
      rating: 3,
    },
    {
      text: "I absolutely love my new yoga mat. It's thick, supportive, and stays in place during my stretches. Perfect for anyone into fitness or relaxation exercises.",
      name: "Caleb Harrison",
      img: avatar5,
      rating: 5,
    },
  ];

  return (
    <div className="testimonial">
      <h2 className="title">Testimonials</h2>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-3" key={index}>
            <i className="fa fa-quote-left"></i>
            <p>{testimonial.text}</p>
            <div className="rating">
              {Array.from({ length: 5 }, (_, i) => (
                <i
                  className={`fa fa-star${
                    i < Math.floor(testimonial.rating) ? "" : "-o"
                  }`}
                  key={i}
                ></i>
              ))}
            </div>
            <img src={testimonial.img} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;

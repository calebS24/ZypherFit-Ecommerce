import React from "react";
import { FaQuoteLeft, FaStar, FaRegStar } from "react-icons/fa";
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
    {
      text: "The gym shorts I ordered are incredibly comfortable and durable. Perfect for both workouts and casual wear.",
      name: "Abby Brooks",
      img: avatar1,
      rating: 4,
    },
    {
      text: "Fantastic quality and fast delivery! The sports bra fits perfectly and provides excellent support during intense workouts.",
      name: "Titus Carter",
      img: avatar2,
      rating: 5,
    },
    {
      text: "I’ve tried many brands, but these training shoes stand out. Great cushioning and stability for lifting.",
      name: "Mishal Lee",
      img: avatar3,
      rating: 5,
    },
    {
      text: "The fitness tracker band is sleek, lightweight, and comfortable enough to wear all day. Battery life is impressive too.",
      name: "Samuel Brown",
      img: avatar4,
      rating: 4,
    },
    {
      text: "Bought the insulated water bottle for hiking — keeps drinks cold for hours. Super sturdy build.",
      name: "Minu Wilson",
      img: avatar5,
      rating: 4,
    },
    {
      text: "Customer service was excellent, and the product quality exceeded my expectations. Will definitely buy again!",
      name: "Sam Martinez",
      img: avatar6,
      rating: 5,
    },
    {
      text: "The resistance bands are strong and versatile. Great addition to my home workout setup.",
      name: "Ethan Collins",
      img: avatar1,
      rating: 4,
    },
    {
      text: "Stylish and functional — the workout hoodie keeps me warm without feeling bulky.",
      name: "Sophia Turner",
      img: avatar2,
      rating: 5,
    },
    {
      text: "The ankle support braces helped me get back to training safely. Comfortable and easy to wear.",
      name: "Jacob Harris",
      img: avatar3,
      rating: 4,
    },
    {
      text: "Excellent grip socks for yoga and pilates. They stay in place and prevent slipping during poses.",
      name: "Rubael Robinson",
      img: avatar4,
      rating: 5,
    },
  ];

  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="testimonial">
      <h2 className="title">Testimonials</h2>
      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {loopTestimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={`${testimonial.name}-${index}`}>
              <FaQuoteLeft />
              <p>{testimonial.text}</p>
              <div className="rating">
                {Array.from({ length: 5 }, (_, i) =>
                  i < Math.floor(testimonial.rating) ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
              </div>
              <img src={testimonial.img} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

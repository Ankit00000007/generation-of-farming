// Testimonials.js
import React, { useState } from 'react';
import User from "../../Images/user01.png";
import './Testimonials.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    // First Slide
    [
      {
        name: "Simon Sun",
        position: "VP of Marketing",
        text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the standard dummy text ever since"
      },
      {
        name: "Martin butt",
        position: "Product Manager",
        text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the standard dummy text ever since"
      },
      {
        name: "Rafael Jones",
        position: "Senior Developer",
        text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the standard dummy text ever since"
      }
    ],
    // Second Slide
    [
      {
        name: "Sarah Williams",
        position: "UI Designer",
        text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the standard dummy text ever since"
      },
      {
        name: "Michael Brown",
        position: "Project Lead",
        text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the standard dummy text ever since"
      },
      {
        name: "Emily Davis",
        position: "Tech Lead",
        text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the standard dummy text ever since"
      }
    ]
  ];

  return (
    <div className="ec-testimonials">
      <div className="ec-testimonials-container">
        <div class="ec-invest-header">
          <span>TESTIMONIALS</span>
          <h2>What They’re Talking About us</h2>
        </div>
        <div className="ec-slider-wrapper">
          <div
            className="ec-slider-content"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {testimonials.map((slide, slideIndex) => (
              <div key={slideIndex} className="ec12-slide">
                {slide.map((testimonial, index) => (
                  <div key={index} className="ec-testimonial-card">
                    <div className="ec-testimonial-author">
                      <img src={User} alt={testimonial.name} />
                      <div className="ec-author-info">
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.position}</span>
                      </div>
                    </div>
                    <p>{testimonial.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="ec-slider-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`ec-dot ${currentSlide === index ? "active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
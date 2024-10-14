import React from "react";
import "./testimonialCard.css";

const TestimonialCard = () => {
  return (
    <div className="testimonial-card-parent">
      <div className="main">
        <div className="message">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="user-details">
          <div className="image">
            <img
              src="https://preview.colorlib.com/theme/oakberry/images/person_2.jpg"
              alt=""
            />
          </div>
          <div className="name">
            <h4>Roger Scott</h4>
            <p>Marketing Manager</p>
          </div>
        </div>
      </div>
      <div className="qoute-icon">
        <i class="fa-solid fa-quote-left"></i>
      </div>
    </div>
  );
};

export default TestimonialCard;

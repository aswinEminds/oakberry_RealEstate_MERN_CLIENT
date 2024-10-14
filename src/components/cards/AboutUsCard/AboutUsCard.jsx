import React from "react";
import "./aboutUsCard.css";

const AboutUsCard = () => {
  return (
    <div className="aboutuscard-parent">
      <div className="container">
        <div className="left">
          <img
            src="https://preview.colorlib.com/theme/oakberry/images/about.jpg"
            alt=""
          />
        </div>
        <div className="right">
          <div>
            <p>About Us</p>
            <h1>Oakberry A Real Estate Company</h1>
          </div>
          <span>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </span>
          <div className="showcase">
            <div>
              <h2>50</h2>
              <p>Years of Experienced</p>
            </div>
            <div>
              <h2>50</h2>
              <p>Years of Experienced</p>
            </div>
            <div>
              <h2>50</h2>
              <p>Years of Experienced</p>
            </div>
            <div>
              <h2>50</h2>
              <p>Years of Experienced</p>
            </div>
          </div>
          <div className="img">
            <img
              src="https://preview.colorlib.com/theme/oakberry/images/about-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;

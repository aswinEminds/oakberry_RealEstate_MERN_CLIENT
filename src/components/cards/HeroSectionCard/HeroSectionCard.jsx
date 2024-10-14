import React from "react";
import "./heroSectionCard.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const HeroSectionCard = ({ pageName }) => {
  return (
    <div className="hero-section-card">
      <img
        src="https://preview.colorlib.com/theme/oakberry/images/bg_4.jpg"
        alt=""
      />
      <div className="texts">
        <div className="breadcrums">
          <Link to={"/"} className="home">
            <p>Home</p>
            <IoIosArrowForward />
          </Link>
          <Link>
            <p>{pageName}</p>
            <IoIosArrowForward />
          </Link>
        </div>
        <h1>{pageName}</h1>
      </div>
    </div>
  );
};

export default HeroSectionCard;

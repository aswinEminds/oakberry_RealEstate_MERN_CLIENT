import React from "react";
import PrimaryButton from "../../buttons/PrimaryButton";
import "./getInTouchBanner.css";

const GetInTouchBanner = () => {
  return (
    <div className="get-in-touch-parent">
      <div className="banner-img"></div>
      <div className="caption container">
        <div className="text">
          <h2>Find Best Place For Leaving</h2>
          <p>Find Best Place For Leaving</p>
        </div>
        <PrimaryButton text="GET IN TOUCH" />
      </div>
    </div>
  );
};

export default GetInTouchBanner;

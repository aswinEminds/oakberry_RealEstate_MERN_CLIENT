import React from "react";
import "./imagesBanner.css";

const ImagesBanner = () => {
  return (
    <div className="images-banner container-xl-fluid">
      <div className="image">
        <img
          src="https://preview.colorlib.com/theme/oakberry/images/gallery-1.jpg"
          alt=""
        />
        <div>
          <i class="fas fa-search icon"></i>
        </div>
      </div>
      <div className="image">
        <img
          src="https://preview.colorlib.com/theme/oakberry/images/gallery-2.jpg"
          alt=""
        />
        <div>
          <i class="fas fa-search icon"></i>
        </div>
      </div>
      <div className="image">
        <img
          src="https://preview.colorlib.com/theme/oakberry/images/gallery-3.jpg"
          alt=""
        />
        <div>
          <i class="fas fa-search icon"></i>
        </div>
      </div>
      <div className="image">
        <img
          src="https://preview.colorlib.com/theme/oakberry/images/gallery-4.jpg"
          alt=""
        />{" "}
        <div>
          <i class="fas fa-search icon"></i>
        </div>
      </div>
      <div className="image">
        <img
          src="https://preview.colorlib.com/theme/oakberry/images/gallery-5.jpg"
          alt=""
        />
        <div>
          <i class="fas fa-search icon"></i>
        </div>
      </div>
      <div className="image">
        <img
          src="https://preview.colorlib.com/theme/oakberry/images/gallery-6.jpg"
          alt=""
        />
        <div>
          <i class="fas fa-search icon"></i>
        </div>
      </div>
    </div>
  );
};

export default ImagesBanner;

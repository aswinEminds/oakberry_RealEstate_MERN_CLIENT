import React from "react";
import "./propertyCard.css";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { VscLayout } from "react-icons/vsc";

const PropertyCard = () => {
  return (
    <div className="propery-card">
      <div className="image">
        <img
          src="https://preview.colorlib.com/theme/oakberry/images/work-1.jpg"
          alt=""
        />
        <p className="amount">30000</p>
      </div>
      <div className="texts">
        <div className="top">
          <div className="user">
            <div className="avatar">
              <img
                src="https://preview.colorlib.com/theme/oakberry/images/person_1.jpg"
                alt=""
              />
            </div>
            <div className="name">
              <p className="m-0">Aswin</p>
            </div>
          </div>
          <div className="time">
            <p>2 weeks ago</p>
          </div>
        </div>
        <div className="center">
          <div className="property-name">
            <h5>Sunny Loft Property</h5>
          </div>
          <div className="property-details">
            <div className="place">New Yark</div>
            <span className="category">sale</span>
          </div>
        </div>
        <div className="bottom">
          <div className="rooms">
            <IoBedOutline color="grey" />
            <p>2</p>
          </div>
          <div className="bath-rooms">
            <LuBath color="grey" />
            <p>3</p>
          </div>
          <div className="squre-feet">
            <VscLayout color="grey" />
            <p>200 Sq.ft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

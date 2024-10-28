import React from "react";
import "./propertyCard.css";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { VscLayout } from "react-icons/vsc";
import moment from "moment";

const PropertyCard = ({ property }) => {
  const isDiscounted = property.original_amount !== property.discounted_amount;
  const timeAgo = moment(property.updatedAt).fromNow();
  return (
    <div className="propery-card">
      <div className="image">
        <img src={property.property_images[0]} alt="" />

        {!isDiscounted ? (
          <div>
            <p className="amount">Rs. {property.original_amount}</p>
          </div>
        ) : (
          <div>
            <p
              style={{
                textDecoration: "line-through",
                color: "#ffffff6e",
              }}
            >
              Rs. {property.original_amount}
            </p>
            <p>Rs. {property.discounted_amount}</p>
          </div>
        )}
      </div>
      <div className="texts">
        <div className="top">
          <div className="user">
            <div className="avatar">
              <img src={property.property_owner.profilePicture} alt="" />
            </div>
            <div className="name">
              <p className="m-0">{property.property_owner.name}</p>
            </div>
          </div>
          <div className="time">
            <p>{timeAgo}</p>
          </div>
        </div>
        <div className="center">
          <div className="property-name">
            <h5>{property.property_name}</h5>
          </div>
          <div className="property-details">
            <div className="place">{property.property_location}</div>
            <span
              className="category"
              style={
                property.property_type === "1"
                  ? { backgroundColor: "#e43737" }
                  : {}
              }
            >
              {property.property_type === "1" ? "Rent" : "Sale"}
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="rooms">
            <IoBedOutline color="grey" />
            <p>{property.bedrooms}</p>
          </div>
          <div className="bath-rooms">
            <LuBath color="grey" />
            <p>{property.bathrooms}</p>
          </div>
          <div className="squre-feet">
            <VscLayout color="grey" />
            <p>{property.total_sqft} Sq.ft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

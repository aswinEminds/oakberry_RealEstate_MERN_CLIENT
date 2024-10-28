import React, { useDebugValue, useState } from "react";
import "./searchBar.css";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton from "../buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

const MySearchBar = () => {
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = new useNavigate();

  const search = () => {
    const queryObj = {};
    if (type !== "") queryObj.type = type;
    if (location !== "") queryObj.location = location;
    if (price > 0) queryObj.price = price;

    const query = new URLSearchParams(queryObj).toString();
    navigate(`/properties?${query}`);
  };

  return (
    <div className="filter-box container">
      <div className="filter-buttons">
        <SecondaryButton text="Buy Properties" />
        <PrimaryButton text="Sell Properties" />
      </div>
      <div className="filter-options">
        <div className="filters">
          <p>Enter Keyword</p>
          <input
            className="filter-search"
            type="text"
            placeholder="Enter Keyword"
          />
        </div>
        <div className="filters">
          <p>Property Type </p>
          <select
            name=""
            id=""
            onChange={(e) => {
              setType(e.target.value);
            }}
            className="filter-dropdown"
          >
            <option value="">Select Type</option>
            <option value="1">Rent</option>
            <option value="2">Sale</option>
          </select>
        </div>
        <div className="filters">
          <p>Location</p>
          <input
            className="filter-search"
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            placeholder="Enter Location"
          />
        </div>
        <div className="filters">
          <p>Price Limit</p>
          <select
            name=""
            id=""
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            class="filter-dropdown"
          >
            <option value="">Select Amount</option>
            <option value="10000">Rs.10000</option>
            <option value="15000">Rs.15,000</option>
            <option value="20000">Rs.20,000</option>
            <option value="100000">Rs.100,000</option>
          </select>
        </div>
        <div className="filters filter-button" onClick={search}>
          <p>Search</p>
        </div>
      </div>
    </div>
  );
};

export default MySearchBar;

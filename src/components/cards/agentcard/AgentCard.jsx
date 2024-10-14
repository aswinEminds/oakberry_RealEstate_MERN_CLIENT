import React from "react";
import "./agentCard.css";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const AgentCard = () => {
  return (
    <div className="agent-card">
      <div className="image">
        <img
          className="img-fluid"
          src="https://preview.colorlib.com/theme/oakberry/images/team-3.jpg"
          alt=""
        />
      </div>
      <div className="agent-details">
        <p>Listing 10 Properties</p>
        <h4>Mike Bochs</h4>
        <div className="social-logos">
          <div className="social-icons">
            <RiFacebookFill className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaGoogle className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;

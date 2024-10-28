import React from "react";
import "./agentCard.css";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const AgentCard = ({ agentsData }) => {
  return (
    <div className="agent-card">
      <div className="image">
        <img className="img-fluid" src={agentsData.profilePicture} alt="" />
      </div>
      <div className="agent-details">
        <p>Listing {agentsData.propertiesCount} Properties</p>
        <h4>{agentsData.name}</h4>
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

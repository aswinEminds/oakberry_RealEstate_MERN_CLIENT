import React from "react";
import "./button.css";

const SecondaryButton = (props) => {
  return (
    <button
      className={`button ${
        props.isRounded ? "secondary-button-rounded" : "secondary-button"
      }`}
    >
      {props.text}
    </button>
  );
};

export default SecondaryButton;

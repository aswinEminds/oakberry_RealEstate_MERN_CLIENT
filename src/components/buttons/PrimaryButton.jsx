import React from "react";
import "./button.css";

function PrimaryButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={`button ${
        props.isRounded ? "primary-button-rounded" : "primary-button"
      }`}
    >
      {props.text}
    </button>
  );
}

export default PrimaryButton;

import React from "react";

const PropsComponent = ({ title, subheading }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>{title}</p>
      <p>{subheading}</p>
    </div>
  );
};

export default PropsComponent;

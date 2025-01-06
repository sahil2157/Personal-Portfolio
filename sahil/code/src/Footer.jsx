import React from "react";

const Footer = () => {
  const footerStyle = {
    textAlign: "center",
    color: "white",
    margin: "2rem 0 0 0",
    padding: "7px",
    backgroundColor: "rgb(44, 44, 44)",
    boxShadow: " 4px rgb(255, 0, 106)",
    bottom: 0,
  };

  return (
    <div style={footerStyle}>
      <p>© 2025 Sahil Salunkhe. All rights reserved.</p>
    </div>
  );
};

export default Footer;

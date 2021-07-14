import React from "react";

const footerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  padding: "5px 0px",
  color: "white",
  fontFamily: `"Lato", sans-serif`,
  fontSize: "20px",
};

function Footer() {
  return (
    <div style={footerStyle} className="footer">
      Powerd by ColorCave
    </div>
  );
}

export default Footer;

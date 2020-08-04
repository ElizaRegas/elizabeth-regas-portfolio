import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer" uk-sticky="bottom: #footerStop">
      <div className="footerText">
        Elizabeth Regas
      </div>
      <div id="footerStop"></div>
    </div>
  );
};

export default Footer;

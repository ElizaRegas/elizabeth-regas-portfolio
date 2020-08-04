import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div uk-sticky="bottom: #footerStop">
        Elizabeth Regas
      </div>
      <div id="footerStop"></div>
    </div>
  );
};

export default Footer;

import React from "react";
import HoverImage from "react-hover-image";
import linkedInIcon from "../../images/linkedInIcon.png";
import linkedInPink from "../../images/linkedInIconPink.png";
import github from "../../images/githubIcon.png";
import githubPink from "../../images/githubIconPink.png";
import twitter from "../../images/twitterIcon.png";
import twitterPink from "../../images/twitterIconPink.png";
import "./footer.css";

const Footer: React.SFC = () => {
  
  return (
    <div id="footer" uk-sticky="bottom: #footerStop">
      <div className="footerText">
        &copy; 2020 Elizabeth Regas
        <a
          href="https://www.linkedin.com/in/elizaregas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HoverImage
            src={linkedInIcon}
            hoverSrc={linkedInPink}
            className="linkedInIcon icons"
          />
        </a>
        <a
          href="https://github.com/ElizaRegas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HoverImage 
            src={github} 
            hoverSrc={githubPink} 
            className="icons" 
          />
        </a>
        <a
          href="https://twitter.com/elizaregas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HoverImage 
            src={twitter} 
            hoverSrc={twitterPink} 
            className="icons" 
          />
        </a>
      </div>
      <div id="footerStop"></div>
    </div>
  );
};

export default Footer;

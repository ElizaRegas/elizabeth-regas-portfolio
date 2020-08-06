import React from "react";
import ekHome from "../../images/ekHome.png";
import ekMusic from "../../images/ekMusic.png";
import ekContact from "../../images/ekContact.png";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <div
        class="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center"
        uk-grid
      >
        <div className="portOne">The Eliza Kelley Project</div>
        <div>
          <img src={ekHome} alt="eliza kelley home page" id="ekHome"></img>
        </div>
        <div>
          <img src={ekMusic} alt="eliza kelley music page" id="ekMusic"></img>
        </div>
      </div>

      <img src={ekContact} alt="eliza kelley contact page" id="ekContact"></img>
    </div>
  );
};

export default Portfolio;

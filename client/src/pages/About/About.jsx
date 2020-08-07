import React from "react";
import AboutPic from "../../images/portfolio2min.png";
import "./about.css";

const About = () => {
  return (
    <div>
      <div uk-grid>
        <div
          id="about"
          class="uk-child-width-1-2@m"
          uk-grid="masonry: true"
        >
          <div>
            <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle">
              <img
                src={AboutPic}
                alt="Sweet Dreams"
                className="aboutPic"
              ></img>
            </div>
          </div>
          <div>
            <div class="uk-card customBorder uk-card-default uk-flex uk-flex-center uk-flex-middle uk-card-body aboutText">
              <p><span>About Me</span>
              <br /><br />
                I'm a creative and analytical individual with a balanced brain approach to web development.
                I view web development as the ultimate challenge, where art meets problem solving, and I thrive on finding elegant solutions to the complex problems.</p>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle">
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;

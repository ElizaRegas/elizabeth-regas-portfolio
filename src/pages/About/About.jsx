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
              <p><span>About Me</span><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere rerum accusantium nam at molestiae quis repudiandae quam corrupti. Pariatur, magnam voluptates. Eum minus possimus rerum aliquid impedit, iusto suscipit.</p>
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

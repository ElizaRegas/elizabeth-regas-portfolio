import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div id="heroImage" className="content">
        <div uk-scrollspy="cls:uk-animation-fade">
          <div className="homeText" id="homeName">
            Elizabeth Regas
          </div>
        </div>
        <div className="uk-animation-kenburns">
          <div className="homeText">
            Developer. Designer. Manipulator of the DOM.
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

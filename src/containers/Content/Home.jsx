import React, { Component } from "react";
import "./content.css";

class Home extends Component {
  render() {
    return (
      <div id="heroImage" className="content">
        <div className="homeText" id="homeName">
          Elizabeth Regas
        </div>
        <div className="homeText">
          Developer. Designer. Manipulator of the DOM.
        </div>
      </div>
    );
  }
}

export default Home;

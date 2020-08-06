import React, { Component } from "react";
import "./home.css";
import "../../App.css";

class Home extends Component {
  render() {
    return (
      <div id="heroImage" className="content">
        <div className="homeText" id="homeName">
          Elizabeth Regas
        </div>
        <div className="uk-animation-fade">
          <div className="uk-animation-kenburns">
            <div className="homeText">
              Developer. Designer. Manipulator of the DOM.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

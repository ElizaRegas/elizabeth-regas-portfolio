import React from "react";
import ekHome from "../../images/ekHome.png";
import CABT from "../../images/CABT 2.png";
import GS from "../../images/GS.png";
import YDKJ from "../../images/YDKJ.png";
import Burger from "../../images/burger.png";
import JSQuiz from "../../images/JSQuiz.png";
import Weather from "../../images/Weather.png";

import "./portfolio.css";
import "../../App.css";

const WPortfolio = () => {
  return (
    <div>
      <div className="portfolio">Web Development Portfolio</div>
      <div className="uk-grid">
        <div
          class="uk-child-width-1-2@s uk-child-width-1-3@m"
          uk-grid="masonry: true"
        >
          <div>
            <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-card-body">
              <a
                href="https://catsagainstbananatrees.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={CABT}
                  alt="cat against a banana tree"
                  className="customBorder"
                ></img>
              </a>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-card-body">
              <a
                href="https://elizakelley.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ekHome}
                  alt="eliza kelley home page"
                  className="customBorder"
                ></img>
              </a>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-card-body">
              <a
                href="https://elizaregas.github.io/Good-Spirits/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GS} alt="good spirits" className="customBorder"></img>
              </a>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-card-body">
              <a
                href="https://elizaregas.github.io/hw6-weather-dashboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Weather}
                  alt="weather app"
                  className="customBorder"
                ></img>
              </a>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-card-body">
              <a
                href="https://elizaregas.github.io/hw4-javascript-quiz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={JSQuiz}
                  alt="javascript quiz"
                  className="customBorder"
                ></img>
              </a>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-card-body">
              <a
                href="https://elizaregas.github.io/Trivia_YDKJ/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={YDKJ}
                  alt="javascript quiz"
                  className="customBorder"
                ></img>
              </a>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-card-body">
              <a
                href="https://enthousiaste-maison-76258.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Burger}
                  alt="burger app"
                  className="customBorder"
                ></img>
              </a>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-card-body">
              <a
                href="https://elizaregas.github.io/Trivia_YDKJ/"
                target="_blank"
                rel="noopener noreferrer"
              >
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WPortfolio;

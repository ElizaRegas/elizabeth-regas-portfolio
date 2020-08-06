import React from "react";
import ekHome from "../../images/ekHome.png";
import CABT from "../../images/CABT 2.png";
import GS from "../../images/GS.png";
import DSB from "../../images/DSBPortfolio.png";
import SD from "../../images/SDPortfolio.png";
import AL from "../../images/ALPortfolio.png";
import UR from "../../images/URPortfolio.png";

import "../../pages/WPortfolio/portfolio.css";
import "../../App.css";

const AVPortfolio = () => {
  return (
    <div>
      <div className="uk-grid">
        <div
          class="uk-child-width-1-2@s uk-child-width-1-3@m"
          uk-grid="masonry: true"
        >
          <div>
            <div
              class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-card-body"
            >
              <a href="https://www.youtube.com/watch?v=0zL5rEqbXvE" target="_blank" rel="noopener noreferrer">
                <img
                  src={SD}
                  alt="Sweet Dreams"
                  className="customBorder"
                ></img>
              </a>
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-card-body"
            >
              <a href="https://elizakelley.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src={ekHome}
                  alt="eliza kelley home page"
                  className="customBorder"
                ></img>
              </a>
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-card-body"
            >
              <a href="https://www.youtube.com/watch?v=1dF_CofdFX4" target="_blank" rel="noopener noreferrer">
                <img
                  src={DSB}
                  alt="Don't Stop Believin'"
                  className="customBorder"
                ></img>
              </a>
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-card-body"
            >
              <a href="https://www.youtube.com/watch?v=u6m-f9-bmWU" target="_blank" rel="noopener noreferrer">
                <img
                  src={UR}
                  alt="Uprising"
                  className="customBorder"
                ></img>
              </a>
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-card-body"
            >
              <a href="https://catsagainstbananatrees.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src={CABT}
                  alt="cat against a banana tree"
                  className="customBorder"
                ></img>
              </a>
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-card-body"
            >
              <a href="https://www.youtube.com/watch?v=1dF_CofdFX4" target="_blank" rel="noopener noreferrer">
                <img
                  src={DSB}
                  alt="Don't Stop Believin'"
                  className="customBorder"
                ></img>
              </a>
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-card-body"
            >
              <a href="https://elizaregas.github.io/Good-Spirits/" target="_blank" rel="noopener noreferrer">
                <img
                  src={GS}
                  alt="cat against a banana tree"
                  className="customBorder"
                ></img>
              </a>
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
              //style="height: 160em"
            >
              Item
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
              //style="height: 120em"
            >
              Item
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
              //style="height: 140em"
            >
              Item
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
              //style="height: 200em"
            >
              Item
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
              //style="height: 180em"
            >
              Item
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
              //style="height: 140em"
            >
              Item
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AVPortfolio;

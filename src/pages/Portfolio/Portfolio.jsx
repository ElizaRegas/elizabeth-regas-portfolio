import React from "react";
import ekHome from "../../images/ekHome.png";
import "./portfolio.css";
import "../../App.css";

const Portfolio = () => {
  return (
    <div>
      <div className="uk-grid">
        <div
          class="uk-child-width-1-2@s uk-child-width-1-3@m uk-card-body"
          uk-grid="masonry: true"
        >
          <div>
            <div
              class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
              //style="height: 100em"
            >
              <img
                src={ekHome}
                alt="eliza kelley home page"
                className="ekProject"
              ></img>
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
              //style="height: 130em"
            >
              Item
            </div>
          </div>
          <div>
            <div
              class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
              //style="height: 150em"
            >
              Item
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

export default Portfolio;

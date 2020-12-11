import React from "react";
import "./HomeInfo.css";

function HomeInfo() {
  return (
    <div className="homeInfo__container">
      <div className="homeInfo__item">
        <div className="homeInfo__item-title">1st</div>
        <div className="homeInfo__item-text">
          See information on your first ingredient
        </div>
      </div>
      <div className="homeInfo__item">
        <div className="homeInfo__item-title">2nd</div>
        <div className="homeInfo__item-text">
          Explore the matching pairs for your chosen ingredient
        </div>
      </div>
      <div className="homeInfo__item">
        <div className="homeInfo__item-title">3rd</div>
        <div className="homeInfo__item-text">
          FlavorLab Algorithm filters the list to complete your meal
        </div>
      </div>
      <div className="homeInfo__item center ">
        <div className="homeInfo__item-title">+ Extras</div>
      </div>
    </div>
  );
}

export default HomeInfo;

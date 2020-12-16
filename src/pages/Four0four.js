import React from "react";
import mollecules from "./../images/file (1).png";

function Four0four(props) {
  return (
    <div className="ProfilePage__container">
      <div className="home__image-container">
        <img className="home__image" src={mollecules} alt="logo" />
      </div>
      <div className="home__text-container">
        <div style={{ color: "black" }} className="home__title">
          404!
        </div>
        <div style={{ color: "black", fontSize: "70" }} className="home__title">
          Sorry page not found!
        </div>
        <div onClick={() => props.history.goBack()} className="home__subtitle">
          <i
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "deeppink",
            }}
          >
            Click here to go back!
          </i>
        </div>
      </div>
    </div>
  );
}

export default Four0four;

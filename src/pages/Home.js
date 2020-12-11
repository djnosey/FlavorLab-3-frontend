import React from "react";
import HomeInfo from "../components/HomeInfo/HomeInfo";
import "./../components/NavBar/NavBar.css";
import { withAuth } from "./../context/auth-context";
import mollecules from "./../images/file (1).png";

function Home() {

  
  return (
    <div className="home__container">
      <div className="home__image-container">
        <img className="home__image" src={mollecules} alt="logo" />
      </div>
      <div className="home__text-container">
        <div className="home__title">Flavor</div>
        <div className="home__title">Lab.</div>
        <div className="home__subtitle">
          <i>Pair common ingredients to create extraordinary dishes.</i>
        </div>
        <HomeInfo />
        <div className="home__start-button">
          <button className="navbar__button">Create!</button>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Home);

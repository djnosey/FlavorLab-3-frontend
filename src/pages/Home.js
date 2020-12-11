import React from "react";
import HomeInfo from "../components/HomeInfo/HomeInfo";
import "./../components/NavBar/NavBar.css";
import { withAuth } from "./../context/auth-context";
import mollecules from "./../images/file (1).png";
import { useHistory } from "react-router-dom";
import { motion } from "framer";

function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/primary");
  };
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="home__container"
    >
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
        <div className="home__start-button"></div>
        <button className="navbar__button" onClick={handleClick}>
          create
        </button>
      </div>
    </motion.div>
  );
}

export default withAuth(Home);

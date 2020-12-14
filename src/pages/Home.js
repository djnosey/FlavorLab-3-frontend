import React from "react";
import HomeInfo from "../components/HomeInfo/HomeInfo";
import "./../components/NavBar/NavBar.css";
import { withAuth } from "./../context/auth-context";
import mollecules from "./../images/file (1).png";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/primary");
  };
  return (
    <motion.div className="home__container">
      <div className="home__image-container">
        <img className="home__image" src={mollecules} alt="logo" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="home__text-container"
      >
        <div className="home__title">Flavor</div>
        <div className="home__title">Lab.</div>
        <div className="home__subtitle">
          <i>Pair common ingredients to create extraordinary dishes.</i>
        </div>
        <HomeInfo />
        <div className="home__start-button"></div>
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)",
          }}
          className="navbar__button"
          onClick={handleClick}
        >
          Create
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default withAuth(Home);

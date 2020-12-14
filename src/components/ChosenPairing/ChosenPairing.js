import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ChosenPairing.css";
import { motion } from "framer-motion";

function ChosenPairing(props) {
  const history = useHistory();
  const [ingredient, setIngredient] = useState({ name: "", image: "" });
  const [currentId, setCurrentId] = useState("");
  const {
    idList,
    chooseNew,
    setSecond,
    setThird,
    incClicks,
    secondIngredient,
    thirdIngredient,
    clicks,
  } = props;

  useEffect(() => {
    props.ingredient[0] && setIngredient(props.ingredient[0]);
  }, [props.ingredient]);

  useEffect(() => {
    setCurrentId(ingredient._id);
  }, [ingredient]);

  const nextIngredient = () => {
    let copyOfIds = [...idList];
    let currentIndex = copyOfIds.indexOf(currentId);
    if (currentIndex < copyOfIds.length - 1) {
      currentIndex++;
      chooseNew(copyOfIds[currentIndex]);
    } else {
      chooseNew(copyOfIds[0]);
    }
    setSecond("");
    setThird("");
    incClicks(0);
  };

  const prevIngredient = () => {
    let copyOfIds = [...idList];
    let currentIndex = copyOfIds.indexOf(currentId);
    if (currentIndex > 0) {
      currentIndex--;
      chooseNew(copyOfIds[currentIndex]);
    } else {
      chooseNew(copyOfIds[copyOfIds.length - 1]);
    }
    setSecond("");
    setThird("");
    incClicks(0);
  };

  const handleRecipeClick = () => {
    let string = `?ingredients=${ingredient.name},+${secondIngredient},+${props.thirdIngredient}&number=3`;
    history.push(`/results/${string}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="chosen__container"
    >
      <div className="chosen__header">
        <button onClick={prevIngredient}>{`<<`}</button>
        <div className="chosen__imageAndTitle">
          <h1>{ingredient.name}</h1>
          <img src={ingredient.image} alt={ingredient.name} />
        </div>
        <button onClick={nextIngredient}>{`>>`}</button>
      </div>

      {secondIngredient ? (
        <h3>
          + <br></br>
          {secondIngredient}
        </h3>
      ) : null}
      {thirdIngredient ? (
        <h3>
          + <br></br>
          {thirdIngredient}
        </h3>
      ) : null}
      {clicks === 2 ? (
        <div>
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)",
            }}
            className="navbar__button"
            onClick={handleRecipeClick}
          >
            get me a recipe!
          </motion.button>
        </div>
      ) : null}
    </motion.div>
  );
}

export default ChosenPairing;

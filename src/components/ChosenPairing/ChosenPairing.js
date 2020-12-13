import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ChosenPairing.css";

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
    let string = `?ingredients=${ingredient.name},+${secondIngredient},+${props.thirdIngredient}&number=5`;
    history.push(`/results/${string}`);
  };

  return (
    <div className="chosen__container">
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
          <button className="navbar__button" onClick={handleRecipeClick}>
            get me a recipe!
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default ChosenPairing;

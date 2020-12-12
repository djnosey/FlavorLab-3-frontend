import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ChosenPairing.css";

function ChosenPairing(props) {
  const history = useHistory();
  const [ingredient, setIngredient] = useState({ name: "", image: "" });
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    props.ingredient[0] && setIngredient(props.ingredient[0]);
  }, [props.ingredient]);

  useEffect(() => {
    setCurrentId(ingredient._id);
  }, [ingredient]);

  const nextIngredient = () => {
    let copyOfIds = [...props.idList];
    let currentIndex = copyOfIds.indexOf(currentId);
    if (currentIndex < copyOfIds.length - 1) {
      currentIndex++;
      props.chooseNew(copyOfIds[currentIndex]);
    } else {
      props.chooseNew(copyOfIds[0]);
    }
    props.setSecond("");
    props.setThird("");
    props.incClicks(0);
  };

  const prevIngredient = () => {
    let copyOfIds = [...props.idList];
    let currentIndex = copyOfIds.indexOf(currentId);
    if (currentIndex > 0) {
      currentIndex--;
      props.chooseNew(copyOfIds[currentIndex]);
    } else {
      props.chooseNew(copyOfIds[copyOfIds.length - 1]);
    }
    props.setSecond("");
    props.setThird("");
    props.incClicks(0);
  };

  const handleRecipeClick = () => {
    let string = `?ingredients=${ingredient.name},+${props.secondIngredient},+${props.thirdIngredient}&number=5`;
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

      {props.secondIngredient ? (
        <h3>
          + <br></br>
          {props.secondIngredient}
        </h3>
      ) : null}
      {props.thirdIngredient ? (
        <h3>
          + <br></br>
          {props.thirdIngredient}
        </h3>
      ) : null}
      {props.clicks === 2 ? (
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

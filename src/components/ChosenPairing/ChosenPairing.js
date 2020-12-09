import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

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
    let string = `?ingredients=${ingredient.name},+${props.secondIngredient},+${props.thirdIngredient}&number=1`;
    history.push(`/results/${string}`);
  };

  return (
    <div>
      <button onClick={prevIngredient}>prev</button>
      <h1>{ingredient.name}</h1>
      <button onClick={nextIngredient}>next</button>
      <h1>{props.secondIngredient}</h1>
      <h1>{props.thirdIngredient}</h1>
      {props.clicks === 2 ? (
        <div>
          <button onClick={handleRecipeClick}>get me a recipe!</button>
        </div>
      ) : null}
    </div>
  );
}

export default ChosenPairing;

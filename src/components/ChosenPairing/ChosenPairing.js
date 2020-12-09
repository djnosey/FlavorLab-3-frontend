import React, { useState, useEffect } from "react";

function ChosenPairing(props) {
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
    props.decClicks(0);
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
    props.decClicks(0);
  };

  return (
    <div>
      <button onClick={prevIngredient}>prev</button>
      <h1>{ingredient.name}</h1>
      <button onClick={nextIngredient}>next</button>
      <h1>{props.secondIngredient}</h1>
      <h1>{props.thirdIngredient}</h1>
      {props.clicks === 1 ? (
        <button onClick={props.reset}>Reset!</button>
      ) : null}
      {props.clicks === 2 ? (
        <div>
          <button>get me a recipe!</button>
          <button onClick={props.reset}>Reset!</button>
        </div>
      ) : null}
    </div>
  );
}

export default ChosenPairing;

import React, { useState, useEffect } from "react";
import "./ingredientInfo.css";

function IngredientInfo(props) {
  const [ingredient, setIngredient] = useState();
  useEffect(() => {
    setIngredient(props.ingredient[0]);
  }, [props]);

  return (
    <div className="ingredientInfo">
      <div className="ingredientInfo__top">
        <h1 id="ingredientHeader">{ingredient?.name}</h1>
        <div className="ingredientInfo__subs">
          <h3 className="ingredientSubtitle">Common types and substitutes:</h3>
          {ingredient?.substitutes.map((item) => {
            return <span key={item}>{item + ", "}</span>;
          })}
        </div>
        <div className="ingredientinfo__details">
          <div className="ingredientinfo__image">
            <img
              id="ingredientImage"
              src={ingredient?.image}
              alt={ingredient?.name}
            />
          </div>
          <div className="ingredientInfo__pairs">
            <div className="ingredientInfo__best">
              <h3 className="ingredientSubtitle">Best Pairings:</h3>
              {ingredient?.bestPairs.map((item) => {
                return (
                  <li key={item} className="ingredientParagraph">
                    {item}
                  </li>
                );
              })}
            </div>
            <div className="ingredientInfo__surprise">
              <h3 className="ingredientSubtitle">Surprise Pairings:</h3>
              {ingredient?.suprisePairs.map((item) => {
                return (
                  <li
                    key={item}
                    className="ingredientParagraph"
                  >
                    {item}
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IngredientInfo;

import React, { useState, useEffect } from "react";
import { useFlip, FlipProvider } from "react-easy-flip";
import "./ingredientInfo.css";

function IngredientInfo(props) {
  const [ingredient, setIngredient] = useState();
  useEffect(() => {
    setIngredient(props.ingredient[0]);
  }, [props]);

  const animationOptions = {
    duration: 700,
    animateColor: true,
  };

  useFlip("flip-root", animationOptions);

  return (
    <FlipProvider>
      <div data-flip-root-id="flip-root" className="ingredientInfo">
        <div className="ingredientInfo__top">
          <h1 data-flip-id="title" id="ingredientHeader">
            {ingredient?.name}
          </h1>
          <div className="ingredientInfo__subs">
            <h3 className="ingredientSubtitle">
              Common types and substitutes:
            </h3>
            {ingredient?.substitutes.map((item) => {
              return (
                <span
                  key={item}
                  data-flip-id="subs"
                  className="ingredientParagraph"
                >
                  {item}
                </span>
              );
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
                <h3 data-flip-id="bestTitle" className="ingredientSubtitle">
                  Best Pairings:
                </h3>
                {ingredient?.bestPairs.map((item) => {
                  return (
                    <li
                      key={item}
                      data-flip-id="best"
                      className="ingredientParagraph"
                    >
                      {item}
                    </li>
                  );
                })}
              </div>
              <div className="ingredientInfo__surprise">
                <h3 data-flip-id="supriseTitle" className="ingredientSubtitle">
                  Surprise Pairings:
                </h3>
                {ingredient?.suprisePairs.map((item) => {
                  return (
                    <li
                      key={item}
                      data-flip-id="suprise"
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
        <div className="ingredientInfo__bottom">
          <p data-flip-id="description" className="ingredientParagraph">
            {ingredient?.description}
          </p>
        </div>
      </div>
    </FlipProvider>
  );
}

export default IngredientInfo;

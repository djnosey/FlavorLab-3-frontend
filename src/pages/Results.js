import React, { useState, useEffect } from "react";
import { withAuth } from "./../context/auth-context";
import axios from "axios";

function Results(props) {
  const [recipe, setRecipe] = useState(null);
  const [wine, setWine] = useState(null);
  const APIKEY = "&apiKey=9849677a7a764db688297b62861624a1";

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients${props.location.search}${APIKEY}`
      )
      .then((response) => {
        setRecipe(response.data[0]);
      });
  }, [props.location.search]);

  useEffect(() => {
    let slicedString = props.location.search.slice(13);
    let indexOfFirstComma = slicedString.indexOf(",");
    let slicedString2 = slicedString.slice(indexOfFirstComma + 2);
    let indexOfSecondComma = slicedString2.indexOf(",");
    let secondIngredient = slicedString2.slice(0, indexOfSecondComma);
    let firstIngredient = slicedString.slice(0, indexOfFirstComma);
    axios
      .get(
        `https://api.spoonacular.com/food/wine/pairing?food=${firstIngredient}${APIKEY}`
      )
      .then((response) => {
        console.log(response.data);
        if (
          response.data.hasOwnProperty("status") ||
          response.data.pairedWines.length === 0
        ) {
          axios
            .get(
              `https://api.spoonacular.com/food/wine/pairing?food=${secondIngredient}${APIKEY}`
            )
            .then((response) => {
              setWine(response.data);
            });
        } else {
          setWine(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.location.search]);

  console.log("wine", wine);
  console.log(recipe);

  return (
    <div>
      <h1>{recipe?.title}</h1>
      <img src={recipe?.image} alt="" />
      {wine?.pairedWines.map((wine) => {
        return <h1>{wine}</h1>;
      })}
      <h1>{wine?.pairingText}</h1>
    </div>
  );
}

export default withAuth(Results);

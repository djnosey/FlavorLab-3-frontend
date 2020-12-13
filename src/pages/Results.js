import React, { useState, useEffect } from "react";
import RecipeResults from "../components/RecipeResults/RecipeResults";
import { withAuth } from "./../context/auth-context";
import favoriteService from "./../lib/favorite-service";
import recipeService from "./../lib/recipe-service";

function Results(props) {
  const [recipe, setRecipe] = useState([]);
  const [wine, setWine] = useState(null);
  const [combination, setCombination] = useState("");
  const recipeSearch = props.location.search;
  const APIKEY = "&apiKey=9849677a7a764db688297b62861624a1";

  let slicedString = recipeSearch.slice(13);
  let indexOfFirstComma = slicedString.indexOf(",");
  let slicedString2 = slicedString.slice(indexOfFirstComma + 2);
  let indexOfSecondComma = slicedString2.indexOf(",");
  let firstIngredient = slicedString.slice(0, indexOfFirstComma);
  let secondIngredient = slicedString2.slice(0, indexOfSecondComma);
  let slicedString3 = slicedString2.slice(indexOfSecondComma + 2, -9);
  let thirdIngredient = slicedString3;

  useEffect(() => {
    setCombination(`${firstIngredient} ${secondIngredient} ${thirdIngredient}`);
  }, [firstIngredient, secondIngredient, thirdIngredient]);

  useEffect(() => {
    recipeService.getrecipes(recipeSearch, APIKEY).then((response) => {
      setRecipe(response);
    });
  }, [recipeSearch]);

  useEffect(() => {
    recipeService
      .getWine(firstIngredient, APIKEY)
      .then((wine) => {
        if (wine.hasOwnProperty("status") || wine.pairedWines.length === 0) {
          recipeService.getWine(secondIngredient, APIKEY).then((wine) => {
            if (
              wine.hasOwnProperty("status") ||
              wine.pairedWines.length === 0
            ) {
              recipeService.getWine(thirdIngredient, APIKEY).then((wine) => {
                setWine(wine);
              });
            } else {
              setWine(wine);
            }
          });
        } else {
          setWine(wine);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [recipeSearch, firstIngredient, secondIngredient, thirdIngredient]);

  const handleSave = (e, id) => {
    e.preventDefault();
    const singleRecipe = recipe.find((recipe) => recipe.id === id);
    let recep = singleRecipe.title;
    let img = singleRecipe.image;
    let combo = combination;
    const copyOfRecipe = [...recipe];
    const recipeIndex = copyOfRecipe.findIndex((recipe) => recipe.id === id);
    copyOfRecipe.splice(recipeIndex, 1, { title: "Saved", image: img });
    setRecipe(copyOfRecipe);
    saveRecipe(combo, recep, img);
  };

  const saveRecipe = (combo, recep, img) => {
    favoriteService
      .addFavorite(combo, recep, img)
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div className="results__container">
      <h1>
        nice! {firstIngredient}, {secondIngredient} & {thirdIngredient + ""}
        Sounds great! Heres some recipe and wine inspiritaion!
      </h1>
      {recipe.map((recipe) => {
        return (
          <div key={recipe.id}>
            <RecipeResults
              title={recipe.title}
              image={recipe.image}
              id={recipe.id}
              save={handleSave}
            />
          </div>
        );
      })}
      {wine?.pairedWines.map((wine) => {
        return <h1>{wine}</h1>;
      })}
      {!wine || wine.pairedWines.length === 0 ? (
        <h1>nada</h1>
      ) : (
        wine.pairingText
      )}
    </div>
  );
}

export default withAuth(Results);

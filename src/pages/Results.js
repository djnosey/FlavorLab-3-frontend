import React, { useState, useEffect } from "react";
import { withAuth } from "./../context/auth-context";
import favoriteService from "./../lib/favorite-service";
import recipeService from "./../lib/recipe-service";
import { motion } from "framer";

function Results(props) {
  const [recipe, setRecipe] = useState([]);
  const [wine, setWine] = useState(null);
  const [combination, setCombination] = useState("");

  const APIKEY = "&apiKey=9849677a7a764db688297b62861624a1";

  let slicedString = props.location.search.slice(13);
  let indexOfFirstComma = slicedString.indexOf(",");
  let slicedString2 = slicedString.slice(indexOfFirstComma + 2);
  let indexOfSecondComma = slicedString2.indexOf(",");
  let secondIngredient = slicedString2.slice(0, indexOfSecondComma);
  let firstIngredient = slicedString.slice(0, indexOfFirstComma);
  let slicedString3 = slicedString2.slice(indexOfSecondComma + 2, -9);
  let thirdIngredient = slicedString3;

  useEffect(() => {
    setCombination(`${firstIngredient} ${secondIngredient} ${thirdIngredient}`);
  }, [firstIngredient, secondIngredient, thirdIngredient]);

  const recipeSearch = props.location.search;

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

  const handleClick = (e, id) => {
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
    <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {recipe.map((recipe) => {
        return (
          <div key={recipe.id}>
            <div>
              <h1>{recipe.title}</h1>
            </div>
            <div>
              <img src={recipe.image} alt={recipe.title} />
            </div>
            <form>
              <button onClick={(e) => handleClick(e, recipe.id)} type="submit">
                save to profile
              </button>
            </form>
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
    </motion.div>
  );
}

export default withAuth(Results);

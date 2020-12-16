import React, { useState, useEffect } from "react";
import ResultsRecipe from "../components/ResultsRecipe/ResultsRecipe";
import ResultsWine from "../components/ResultsWine/ResultsWine";
import { withAuth } from "./../context/auth-context";
import favoriteService from "./../lib/favorite-service";
import recipeService from "./../lib/recipe-service";
import { motion } from "framer-motion";
import stringSplitter from "./../HelperFunctions/stringSplitter";

function Results(props) {
  const [recipe, setRecipe] = useState([]);
  const [wine, setWine] = useState([]);
  const [combination, setCombination] = useState("");
  const APIKEY = "&apiKey=9849677a7a764db688297b62861624a1";
  const recipeSearch = props.location.search;

  useEffect(() => {
    setCombination(stringSplitter(recipeSearch)[0]);
  }, [recipeSearch]);

  useEffect(() => {
    recipeService.getrecipes(recipeSearch, APIKEY).then((response) => {
      setRecipe(response);
    });
  }, [recipeSearch]);

  useEffect(() => {
    recipeService
      .getWine(stringSplitter(recipeSearch)[1], APIKEY)
      .then((wine) => {
        if (wine.hasOwnProperty("status") || wine.pairedWines.length === 0) {
          recipeService
            .getWine(stringSplitter(recipeSearch[2]), APIKEY)
            .then((wine) => {
              if (
                wine.hasOwnProperty("status") ||
                wine.pairedWines.length === 0
              ) {
                recipeService
                  .getWine(stringSplitter(recipeSearch)[3], APIKEY)
                  .then((wine) => {
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
  }, [recipeSearch]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const singleRecipe = recipe.find((recipe) => recipe.id === id);
    let recep = singleRecipe.title;
    let img = singleRecipe.image;
    let combo = combination;
    const copyOfRecipe = [...recipe];
    const recipeIndex = copyOfRecipe.findIndex((recipe) => recipe.id === id);
    copyOfRecipe.splice(recipeIndex, 1, { title: "Saved!", image: img });
    setRecipe(copyOfRecipe);
    saveRecipe(combo, recep, img, id);
  };

  const saveRecipe = (combo, recep, img, id) => {
    favoriteService
      .addFavorite(combo, recep, img)
      .then(() => {
        setTimeout(() => {
          const copyOfRecipe = [...recipe];
          const recipeIndex = copyOfRecipe.findIndex(
            (recipe) => recipe.id === id
          );
          copyOfRecipe.splice(recipeIndex, 1);
          setRecipe(copyOfRecipe);
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="results__container">
      <h1>
        Nice! {combination + " "}
        Sounds great! Heres some recipe and wine inspiritaion!
      </h1>
      <div className="results">
        <motion.div
          initial={{ opacity: 0, x: "-250vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, type: "Inertia" }}
        >
          <ResultsRecipe recipe={recipe} save={handleClick} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        >
          <ResultsWine wine={wine} />
        </motion.div>
      </div>
    </div>
  );
}

export default withAuth(Results);

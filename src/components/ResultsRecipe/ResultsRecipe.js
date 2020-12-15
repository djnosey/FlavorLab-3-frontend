import React, { useState, useEffect } from "react";
import "./ResultsRecipe.css";
import { motion } from "framer-motion";

function ResultsRecipe(props) {
  const [recipeList, setRecipeList] = useState([]);
  const { recipe, save } = props;
  console.log(recipe);
  useEffect(() => {
    setRecipeList(recipe);
  }, [recipe]);
  return (
    <div className="resultsRecipe__container">
      {recipeList?.map((recipe) => {
        return (
          <motion.div className="resultsRecipe__single" key={recipe.id}>
            <div className="resultsRecipe__image">
              <img src={recipe.image} alt={recipe.title} />
            </div>
            <div className="resultsRecipe__title">
              <h3>{recipe.title}</h3>
            </div>
            <form>
              <motion.button
                whileHover={{
                  scale: 1.067,
                  boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)",
                }}
                className="navbar__button"
                onClick={(e) => save(e, recipe.id)}
                type="submit"
              >
                Save to profile
              </motion.button>
            </form>
          </motion.div>
        );
      })}
    </div>
  );
}

export default ResultsRecipe;

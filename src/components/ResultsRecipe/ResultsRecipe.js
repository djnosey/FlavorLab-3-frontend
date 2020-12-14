import React from "react";
import "./ResultsRecipe.css";

function ResultsRecipe(props) {
  const { recipe, save } = props;
  return (
    <div className="resultsRecipe__container">
      {recipe?.map((recipe) => {
        return (
          <div className="resultsRecipe__single" key={recipe.id}>
            <div className="resultsRecipe__image">
              <img src={recipe.image} alt={recipe.title} />
            </div>
            <div className="resultsRecipe__title">
              <h3>{recipe.title}</h3>
            </div>
            <form>
              <button
                className="navbar__button"
                onClick={(e) => save(e, recipe.id)}
                type="submit"
              >
                save to profile
              </button>
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default ResultsRecipe;

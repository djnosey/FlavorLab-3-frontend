import React from "react";
import "./RecipeResults.css";

function RecipeResults(props) {
  const { save, title, id, image } = props;
  return (
    <div className="recipeResults__container">
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <img src={image} alt={title} />
      </div>
      <form>
        <button onClick={(e) => save(e, id)} type="submit">
          save to profile
        </button>
      </form>
    </div>
  );
}

export default RecipeResults;

import React from "react";

function ProfileRecipes(props) {
  return (
    <div>
      <div>
        <h1>{props.recipe}</h1>
        <h1>{props.combination}</h1>
        <img src={props.image} alt={props.recipe} />
        <button onClick={() => props.deleteRecipe(props.id)}>
          delete recipe
        </button>
      </div>
    </div>
  );
}

export default ProfileRecipes;

import React from "react";
import { useLocation } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import "./ProfileRecipes.css";

function ProfileRecipes(props) {
  const { recipe, combination, image, id } = props;
  const location = useLocation();
  const url = location.pathname;
  console.log(location);
  return (
    <div className="resultsRecipe__single">
      <div className="resultsRecipe__image">
        <img src={image} alt={recipe} />
      </div>
      <h1>{combination}</h1>
      <h1>{recipe}</h1>
      <TwitterShareButton url={url}>
        <TwitterIcon size={30} round></TwitterIcon>
      </TwitterShareButton>
      <FacebookShareButton title="Hello" url={url}>
        <FacebookIcon size={30} round></FacebookIcon>
      </FacebookShareButton>
      <button className="navbar__button" onClick={() => props.deleteRecipe(id)}>
        delete recipe
      </button>
    </div>
  );
}

export default ProfileRecipes;

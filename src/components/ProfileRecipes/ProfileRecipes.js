import React from "react";
import { useLocation } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

function ProfileRecipes(props) {
  const location = useLocation();
  const url = location.pathname;
  console.log(location);
  return (
    <div>
      <div>
        <h1>{props.combination}</h1>
        <h1>{props.recipe}</h1>
        <img src={props.image} alt={props.recipe} />
        <FacebookShareButton title="Hello" url={url}>
          <FacebookIcon></FacebookIcon>
        </FacebookShareButton>
        <button onClick={() => props.deleteRecipe(props.id)}>
          delete recipe
        </button>
      </div>
    </div>
  );
}

export default ProfileRecipes;

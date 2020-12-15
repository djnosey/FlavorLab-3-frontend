import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import "./ProfileRecipes.css";
import "./../ResultsRecipe/ResultsRecipe.css";
import { motion } from "framer-motion";

function ProfileRecipes(props) {
  const { recipe, combination, image, id } = props;

  const sharingURL = "https://flavorlab.herokuapp.com/";
  const combinationStr = combination.split(" ").join(",");

  return (
    <div className="resultsRecipe__single">
      <div className="resultsRecipe__image">
        <img src={image} alt={recipe} />
      </div>
      <h1 id="combo">{combination}</h1>
      <h1 id="recipe">{recipe}</h1>
      <div className="resultsRecipe__sharingButtons">
        <WhatsappShareButton
          title={` check out this ${recipe} made by pairing ${combinationStr}.... created on FlavorLab.`}
          url={sharingURL}
        >
          <WhatsappIcon size={30} round></WhatsappIcon>
        </WhatsappShareButton>
        <TwitterShareButton
          title={` check out this ${recipe} made by pairing ${combinationStr}.... created on FlavorLab.`}
          url={sharingURL}
        >
          <TwitterIcon size={30} round></TwitterIcon>
        </TwitterShareButton>
        <FacebookShareButton
          quote={` check out this ${recipe} made by pairing ${combinationStr}.... created on FlavorLab.`}
          url={sharingURL}
        >
          <FacebookIcon size={30} round></FacebookIcon>
        </FacebookShareButton>
      </div>
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)",
        }}
        className="navbar__button"
        onClick={() => props.deleteRecipe(id)}
      >
        delete recipe
      </motion.button>
    </div>
  );
}

export default ProfileRecipes;

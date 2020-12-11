import React, { useState, useEffect } from "react";
import { withAuth } from "./../context/auth-context";
import axios from "axios";

function Results(props) {
  const [recipe, setRecipe] = useState([]);
  const [wine, setWine] = useState(null);
  const [user, setUser] = useState(null);
  const [combination, setCombination] = useState("");

  const APIKEY = "&apiKey=9849677a7a764db688297b62861624a1";

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

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

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients${props.location.search}${APIKEY}`
      )
      .then((response) => {
        setRecipe(response.data);
      });
  }, [props.location.search]);

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/food/wine/pairing?food=${firstIngredient}${APIKEY}`
      )
      .then((response) => {
        if (
          response.data.hasOwnProperty("status") ||
          response.data.pairedWines.length === 0
        ) {
          axios
            .get(
              `https://api.spoonacular.com/food/wine/pairing?food=${secondIngredient}${APIKEY}`
            )
            .then((response) => {
              if (
                response.data.hasOwnProperty("status") ||
                response.data.pairedWines.length === 0
              ) {
                axios
                  .get(
                    `https://api.spoonacular.com/food/wine/pairing?food=${thirdIngredient}${APIKEY}`
                  )
                  .then((response) => {
                    setWine(response.data);
                  });
              } else {
                setWine(response.data);
              }
            });
        } else {
          setWine(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.location.search]);

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
    axios
      .post(
        "http://localhost:5000/api/favorite",
        {
          combination: combo,
          recipe: recep,
          image: img,
        },
        { withCredentials: true }
      )
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div>
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
    </div>
  );
}

export default withAuth(Results);

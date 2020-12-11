import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollPicker from "../components/Picker/ScrollPicker";
import IngredientInfo from "../components/IngredientInfo/IngredientInfo";
import { withAuth } from "./../context/auth-context";
import ingredientService from "./../lib/ingredients-service";
import { motion } from "framer";

function Primary(props) {
  const [allIngredients, setAllIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [SingleIngredientObject, setSingleIngredientObject] = useState([]);

  useEffect(() => {
    ingredientService.getAll().then((ingredients) => {
      setAllIngredients(ingredients);
      setSelectedIngredient("Alliums");
    });
  }, []);

  const namesArray = allIngredients.map((item) => item.name);

  useEffect(() => {
    const foundIngredient = allIngredients.filter(
      (item) => item.name === selectedIngredient
    );
    setSingleIngredientObject(foundIngredient);
  }, [allIngredients, selectedIngredient]);

  const findIngredient = (ingredient) => {
    setSelectedIngredient(ingredient);
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="primary__container"
    >
      <div className="primary__left">
        <ScrollPicker names={namesArray} findIngredient={findIngredient} />
        {props.isLoggedIn ? (
          <Link to={`/pairing/${SingleIngredientObject[0]?._id}`}>
            <button className="navbar__button">start pairing logged in</button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="navbar__button">start pairing logged out</button>
          </Link>
        )}
      </div>
      <div className="primary__right">
        <IngredientInfo ingredient={SingleIngredientObject} />
      </div>
    </motion.div>
  );
}

export default withAuth(Primary);

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollPicker from "../components/Picker/ScrollPicker";
import IngredientInfo from "../components/IngredientInfo/IngredientInfo";
import { withAuth } from "./../context/auth-context";
import ingredientService from "./../lib/ingredients-service";
import { motion } from "framer-motion";

function Primary(props) {
  const [allIngredients, setAllIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [SingleIngredientObject, setSingleIngredientObject] = useState([]);
  const { isLoggedIn } = props;

  useEffect(() => {
    ingredientService.getAll().then((ingredients) => {
      setAllIngredients(ingredients);
      setSelectedIngredient("Alliums");
    });
  }, []);

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="primary__container"
    >
      <div className="primary__left">
        <ScrollPicker findIngredient={findIngredient} />
        {isLoggedIn ? (
          <Link to={`/pairing/${SingleIngredientObject[0]?._id}`}>
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)",
              }}
              className="navbar__button"
            >
              Start pairing
            </motion.button>
          </Link>
        ) : (
          <Link to="/login">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)",
              }}
              className="navbar__button"
            >
              Log in
            </motion.button>
          </Link>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="primary__right"
      >
        <IngredientInfo ingredient={SingleIngredientObject} />
      </motion.div>
    </motion.div>
  );
}

export default withAuth(Primary);

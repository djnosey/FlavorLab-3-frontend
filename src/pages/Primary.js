import React, { useState, useEffect } from "react";
import axios from "axios";
import ScrollPicker from "../components/Picker/ScrollPicker";
import IngredientInfo from "../components/IngredientInfo/IngredientInfo";

function Primary() {
  const [allIngredients, setAllIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [SingleIngredientObject, setSingleIngredientObject] = useState({});
  const [ingredientId, setIngredientId] = useState(null);
  
  const findIngredient = (ingredient) => {
    setIngredient(ingredient);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/ingredient", { withCredentials: true })
      .then((response) => {
        setAllIngredients(response.data);
      });
  }, []);

  useEffect(() => {
    const foundIngredient = allIngredients.filter(
      (item) => item.name === ingredient
    );
    const foundIngrerdientId = foundIngredient[0]?._id;
    setIngredientId(foundIngrerdientId);
  }, [allIngredients, ingredient]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/ingredient/${ingredientId}`)
      .then((response) => {
        setSingleIngredientObject(response.data);
      });
  }, [ingredientId]);

  return (
    <div className="primary">
      <div className="primary__left">
        <ScrollPicker findIngredient={findIngredient} />
      </div>
      <div className="primary__right">
        <IngredientInfo ingredient={SingleIngredientObject} />
      </div>
    </div>
  );
}

export default Primary;

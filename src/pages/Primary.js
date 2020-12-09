import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ScrollPicker from "../components/Picker/ScrollPicker";
import IngredientInfo from "../components/IngredientInfo/IngredientInfo";
import { withAuth } from "./../context/auth-context";

function Primary(props) {
  const [allIngredients, setAllIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [SingleIngredientObject, setSingleIngredientObject] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/ingredient", { withCredentials: true })
      .then((response) => {
        setAllIngredients(response.data);
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
    <div className="primary__container">
      <div className="primary__left">
        <ScrollPicker findIngredient={findIngredient} />
        {props.isLoggedIn ? (
          <Link to={`/pairing/${SingleIngredientObject[0]?._id}`}>
            <button>start pairing logged in</button>
          </Link>
        ) : (
          <Link to="/login">
            <button>start pairing logged out</button>
          </Link>
        )}
      </div>
      <div className="primary__right">
        <IngredientInfo ingredient={SingleIngredientObject} />
      </div>
    </div>
  );
}

export default withAuth(Primary);

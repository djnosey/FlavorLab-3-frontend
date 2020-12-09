import React, { useState, useEffect } from "react";
import axios from "axios";

function FlavourPairingPage(props) {
  const [allIngredients, setAllIngredients] = useState();
  const [ingredient, setIngredient] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/ingredient}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setAllIngredients(response.data);
      });
  }, []);

  return (
    <div className="flavour-pairing-page__container">
      <div className="flavour-pairing-page__leftside">LEFT</div>
      <div className="flavour-pairing-page__rightside">RIGHT</div>
    </div>
  );
}

export default FlavourPairingPage;

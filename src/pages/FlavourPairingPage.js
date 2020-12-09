import React, { useState, useEffect } from "react";
import axios from "axios";
import PairingContainer from "../components/PairingContainer/PairingContainer";
import ChosenPairing from "../components/ChosenPairing/ChosenPairing";

function FlavourPairingPage(props) {
  const [allIngredients, setAllIngredients] = useState([]);
  const [ingredient, setIngredient] = useState({});
  const [id, setId] = useState(props.match.params.id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/ingredient`, {
        withCredentials: true,
      })
      .then((response) => {
        setAllIngredients(response.data);
      });
  }, []);

  useEffect(() => {
    if (id) {
      const currentIngredient = allIngredients.filter(
        (ingredient) => ingredient._id === id
      );
      setIngredient(currentIngredient);
    }
  }, [id, allIngredients]);

  return (
    <div className="flavour-pairing-page__container">
      <div className="flavour-pairing-page__leftside">
        <PairingContainer ingredient={ingredient} />
      </div>
      <div className="flavour-pairing-page__rightside">
        <ChosenPairing ingredient={ingredient} />
      </div>
    </div>
  );
}

export default FlavourPairingPage;

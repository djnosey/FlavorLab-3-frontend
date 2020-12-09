import React, { useState, useEffect } from "react";
import axios from "axios";
import PairingContainer from "../components/PairingContainer/PairingContainer";
import ChosenPairing from "../components/ChosenPairing/ChosenPairing";

function FlavourPairingPage(props) {
  const [allIngredients, setAllIngredients] = useState([]);
  const [ingredient, setIngredient] = useState({});
  const [id, setId] = useState(props.match.params.id);
  const [idArray, setIdArray] = useState([]);
  const [secondPick, setSecondPick] = useState("");
  const [thirdPick, setThirdPick] = useState("");
  const [clicks, setClicks] = useState(0);

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
    const currentIngredient = allIngredients.filter(
      (ingredient) => ingredient._id === id
    );
    setIngredient(currentIngredient);
  }, [id, allIngredients]);

  useEffect(() => {
    const copyIdArray = allIngredients.map((ingredient) => {
      return ingredient._id;
    });

    setIdArray(copyIdArray);
  }, [allIngredients]);

  const changeId = (id) => {
    setId(id);
  };

  const setSecond = (ingredient) => {
    setSecondPick(ingredient);
  };

  const setThird = (ingredient) => {
    setThirdPick(ingredient);
  };

  const incClicks = (num) => {
    setClicks(num);
  };

  const decClicks = (num) => {
    setClicks(num);
  };

  const reset = () => {
    setSecond("");
    setThird("");
    decClicks(0);
    const currentIngredient = allIngredients.filter(
      (ingredient) => ingredient._id === id
    );
    setIngredient(currentIngredient);
  };

  return (
    <div className="flavour-pairing-page__container">
      <div className="flavour-pairing-page__leftside">
        <PairingContainer
          setSecond={setSecond}
          setThird={setThird}
          incClicks={incClicks}
          decClicks={decClicks}
          ingredient={ingredient}
          clicks={clicks}
        />
      </div>
      <div className="flavour-pairing-page__rightside">
        <ChosenPairing
          chooseNew={changeId}
          idList={idArray}
          ingredient={ingredient}
          secondIngredient={secondPick}
          thirdIngredient={thirdPick}
          setSecond={setSecond}
          setThird={setThird}
          clicks={clicks}
          incClicks={incClicks}
          decClicks={decClicks}
          reset={reset}
        />
      </div>
    </div>
  );
}

export default FlavourPairingPage;

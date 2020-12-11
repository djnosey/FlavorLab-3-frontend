import React, { useState, useEffect } from "react";
import PairingContainer from "../components/PairingContainer/PairingContainer";
import ChosenPairing from "../components/ChosenPairing/ChosenPairing";
import ingredientService from "./../lib/ingredients-service";

function FlavourPairingPage(props) {
  const [allIngredients, setAllIngredients] = useState([]);
  const [ingredient, setIngredient] = useState({});
  const [id, setId] = useState(props.match.params.id);
  const [idArray, setIdArray] = useState([]);
  const [secondPick, setSecondPick] = useState("");
  const [thirdPick, setThirdPick] = useState("");
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    ingredientService.getAll().then((ingredients) => {
      setAllIngredients(ingredients);
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

  return (
    <div className="flavour-pairing-page__container">
      <div className="flavour-pairing-page__leftside">
        <PairingContainer
          setSecond={setSecond}
          setThird={setThird}
          incClicks={incClicks}
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
          incClicks={incClicks}
          setSecond={setSecond}
          setThird={setThird}
          clicks={clicks}
        />
      </div>
    </div>
  );
}

export default FlavourPairingPage;

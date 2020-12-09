import React, { useState, useEffect } from "react";

function PairingContainer(props) {
  const [ingredient, setIngredient] = useState({
    allPairs: [{ name: "", group: "", score: 0 }],
  });
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    props.ingredient[0] && setIngredient(props.ingredient[0]);
  }, [props.ingredient]);

  useEffect(() => {
    const pairs = ingredient.allPairs.filter((item) => item.score !== 0);
    setPairs(pairs);
  }, [ingredient]);

  console.log(pairs);

  return (
    <div>
      {pairs.map((pair) => {
        return <p>{pair.name}</p>;
      })}
    </div>
  );
}

export default PairingContainer;

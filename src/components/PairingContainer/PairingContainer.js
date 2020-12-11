import React, { useState, useEffect } from "react";

import "./PairingContainer.css";

function PairingContainer(props) {
  const [ingredient, setIngredient] = useState({
    allPairs: [{ name: "", group: "", score: 0 }],
  });
  const [pairs, setPairs] = useState([]);
  const [pairsCopy, setPairsCopy] = useState([]);

  useEffect(() => {
    props.ingredient[0] && setIngredient(props.ingredient[0]);
  }, [props.ingredient]);

  useEffect(() => {
    const copyOfPairs = ingredient.allPairs.filter((item) => item.score !== 0);
    setPairsCopy(copyOfPairs);
    setPairs(copyOfPairs);
  }, [ingredient]);

  const sortByScore = (e) => {
    e.preventDefault();
    let copyOfPairs = [...pairs];
    copyOfPairs.sort((a, b) => b.score - a.score);
    setPairs(copyOfPairs);
  };

  const sortByName = (e) => {
    e.preventDefault();
    let copyOfPairs = [...pairs];
    copyOfPairs.sort((a, b) => a.name.localeCompare(b.name));
    setPairs(copyOfPairs);
  };

  const sortByGroup = (e) => {
    e.preventDefault();
    setPairs(pairsCopy);
    props.setSecond("");
    props.setThird("");
    props.incClicks(0);
  };

  const reducePairs = (group, name) => {
    const copyOfPairs = [...pairs];
    const filtered = [];

    if (props.clicks === 0) {
      props.incClicks(1);
      props.setSecond(name);

      copyOfPairs.forEach((item, index) => {
        if (group === "Earthy") {
          if (
            item.group === "Chocolate" ||
            item.group === "Dairy" ||
            item.group === "Floral" ||
            item.group === "Meaty"
          ) {
            filtered.push(item);
          }
        } else if (group === "Berry") {
          if (item.group === "Spice" || item.group === "Floral") {
            filtered.push(item);
          }
        } else if (group === "Citrus") {
          if (
            item.group === "Alcohol" ||
            item.group === "Medicinal" ||
            item.group === "Melon" ||
            item.group === "Suplhur" ||
            item.group === "Tree Fruit" ||
            item.group === "Wood" ||
            item.group === "Nutty" ||
            item.group === "Spice"
          ) {
            filtered.push(item);
          }
        } else if (group === "Dried Fruit") {
          if (item.group === "Meaty" || item.group === "Phenol") {
            filtered.push(item);
          }
        } else if (group === "Melon") {
          if (
            item.group === "Citrus" ||
            item.group === "Fruit Like" ||
            item.group === "Green" ||
            item.group === "Suplhur" ||
            item.group === "Savory"
          ) {
            filtered.push(item);
          }
        } else if (group === "Tree Fruit") {
          if (
            item.group === "Citrus" ||
            item.group === "Dairy" ||
            item.group === "Floral" ||
            item.group === "Fruit Like" ||
            item.group === "Roasted" ||
            item.group === "Savory" ||
            item.group === "Petrol"
          ) {
            filtered.push(item);
          }
        } else if (group === "Tropical") {
          if (
            item.group === "Dairy" ||
            item.group === "Floral" ||
            item.group === "Fruit Like" ||
            item.group === "Wood" ||
            item.group === "Savory" ||
            item.group === "Spice"
          ) {
            filtered.push(item);
          }
        } else if (group === "Phenol") {
          if (
            item.group === "Chocolate" ||
            item.group === "Dried Fruit" ||
            item.group === "Smoke"
          ) {
            filtered.push(item);
          }
        } else if (group === "Pungent") {
          if (item.group === "Foral" || item.group === "Sour") {
            filtered.push(item);
          }
        } else if (group === "Caramel") {
          if (
            item.group === "Alcohol" ||
            item.group === "Fruit Like" ||
            item.group === "Savory" ||
            item.group === "Spice" ||
            item.group === "Nutty"
          ) {
            filtered.push(item);
          }
        } else if (group === "Chocolate") {
          if (
            item.group === "Alcohol" ||
            item.group === "Dairy" ||
            item.group === "Earthy" ||
            item.group === "Fruit Like" ||
            item.group === "Nutty" ||
            item.group === "Phenol" ||
            item.group === "Meaty"
          ) {
            filtered.push(item);
          }
        } else if (group === "Meaty") {
          if (
            item.group === "Alcohol" ||
            item.group === "Chocolate" ||
            item.group === "Dried Fruit" ||
            item.group === "Fruit Like" ||
            item.group === "Earthy" ||
            item.group === "Savory" ||
            item.group === "Smoke"
          ) {
            filtered.push(item);
          }
        } else if (group === "Nutty") {
          if (
            item.group === "Caramel" ||
            item.group === "Chocolate" ||
            item.group === "Fruit Like" ||
            item.group === "Sulphur" ||
            item.group === "Wood"
          ) {
            filtered.push(item);
          }
        } else if (group === "Roasted") {
          if (
            item.group === "Marine" ||
            item.group === "Petrol" ||
            item.group === "Fruit Like" ||
            item.group === "Sulphur" ||
            item.group === "Tree Fruit"
          ) {
            filtered.push(item);
          }
        } else if (group === "Toasted") {
          if (item.group === "Dairy" || item.group === "Fruit Like") {
            filtered.push(item);
          }
        } else if (group === "Medicinal") {
          if (
            item.group === "Citrus" ||
            item.group === "Green" ||
            item.group === "Herbacious" ||
            item.group === "Sour"
          ) {
            filtered.push(item);
          }
        } else if (group === "Spice") {
          if (
            item.group === "Berry" ||
            item.group === "Caramel" ||
            item.group === "Citrus" ||
            item.group === "Tropical" ||
            item.group === "Wood" ||
            item.group === "Smoke"
          ) {
            filtered.push(item);
          }
        } else if (group === "Smoke") {
          if (
            item.group === "Meaty" ||
            item.group === "Phenol" ||
            item.group === "Sour" ||
            item.group === "Spice"
          ) {
            filtered.push(item);
          }
        } else if (group === "Petrol") {
          if (item.group === "Roasted" || item.group === "Tree Fruit") {
            filtered.push(item);
          }
        } else if (group === "Wood") {
          if (
            item.group === "Citrus" ||
            item.group === "Herbacious" ||
            item.group === "Nutty" ||
            item.group === "Spice" ||
            item.group === "Tropical"
          ) {
            filtered.push(item);
          }
        } else if (group === "Marine") {
          if (
            item.group === "Roasted" ||
            item.group === "Sour" ||
            item.group === "Savory"
          ) {
            filtered.push(item);
          }
        } else if (group === "Sour") {
          if (
            item.group === "Marine" ||
            item.group === "Medcinal" ||
            item.group === "Smoke" ||
            item.group === "Pungent"
          ) {
            filtered.push(item);
          }
        } else if (group === "Savory") {
          if (
            item.group === "Alcohol" ||
            item.group === "Caramel" ||
            item.group === "Marine" ||
            item.group === "Melon" ||
            item.group === "Meaty" ||
            item.group === "Tree Fruit" ||
            item.group === "Tropical"
          ) {
            filtered.push(item);
          }
        } else if (group === "Fruit Like") {
          if (
            item.group === "Chocolate" ||
            item.group === "Caramel" ||
            item.group === "Nutty" ||
            item.group === "Melon" ||
            item.group === "Meaty" ||
            item.group === "Tree Fruit" ||
            item.group === "Toasted" ||
            item.group === "Roasted"
          ) {
            filtered.push(item);
          }
        } else if (group === "Green") {
          if (item.group === "Medicinal" || item.group === "Melon") {
            filtered.push(item);
          }
        } else if (group === "Herbacious") {
          if (
            item.group === "Medicinal" ||
            item.group === "Green" ||
            item.group === "Wood"
          ) {
            filtered.push(item);
          }
        } else if (group === "Alcohol") {
          if (
            item.group === "Chocolate" ||
            item.group === "Caramel" ||
            item.group === "Citrus" ||
            item.group === "Dairy" ||
            item.group === "Meaty" ||
            item.group === "Savory"
          ) {
            filtered.push(item);
          }
        } else if (group === "Sulphur") {
          if (
            item.group === "Citrus" ||
            item.group === "Melon" ||
            item.group === "Nutty" ||
            item.group === "Roasted"
          ) {
            filtered.push(item);
          }
        } else if (group === "Dairy") {
          if (
            item.group === "Alcohol" ||
            item.group === "Chocolate" ||
            item.group === "Earthy" ||
            item.group === "Floral" ||
            item.group === "Toasted" ||
            item.group === "Tree Fruit" ||
            item.group === "Tropical"
          ) {
            filtered.push(item);
          }
        } else if (group === "Floral") {
          if (
            item.group === "Berry" ||
            item.group === "Dairy" ||
            item.group === "Earthy" ||
            item.group === "Pungent" ||
            item.group === "Tree Fruit" ||
            item.group === "Tropical"
          ) {
            filtered.push(item);
          }
        }
      });
      setPairs(filtered);
    }

    if (props.clicks === 1) {
      props.setThird(name);
      props.incClicks(2);
    }
  };

  return (
    <div className="pairingContainer">
      <div className="pairingContainer__buttons">
        {props.clicks < 2 ? (
          <button onClick={sortByScore}>sort by best match</button>
        ) : (
          <button onClick={sortByGroup}>Reset</button>
        )}
        {props.clicks < 2 ? (
          <button onClick={sortByName}>sort by name</button>
        ) : null}
      </div>
      <div className="matches">
        {pairs.map((pair) => {
          return (
            <p
              key={pair}
              onClick={() => reducePairs(pair.group, pair.name)}
              className="pairingContainer__pair"
            >
              <span>{pair.name}</span>...
              <span>{pair.score}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default PairingContainer;

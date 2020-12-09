import React, { useState, useEffect } from "react";
import "./PairingContainer.css";

function PairingContainer(props) {
  const [ingredient, setIngredient] = useState({
    allPairs: [{ name: "", group: "", score: 0 }],
  });
  const [pairs, setPairs] = useState([]);
  const [sortNameBtnClicked, setSortNameBtnClicked] = useState(false);
  const [sortScoreBtnClicked, setSortScoreBtnClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    props.ingredient[0] && setIngredient(props.ingredient[0]);
  }, [props.ingredient]);

  useEffect(() => {
    const copyOfPairs = ingredient.allPairs.filter((item) => item.score !== 0);
    setPairs(copyOfPairs);
  }, [ingredient]);

  useEffect(() => {
    if (searchTerm !== "") {
      const copyOfPairs = pairs.filter((pair) =>
        pair.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setPairs(copyOfPairs);
    } else {
      setPairs(ingredient.allPairs.filter((item) => item.score !== 0));
    }
  }, [searchTerm]);

  const sortByScore = (e) => {
    e.preventDefault();
    let copyOfPairs = [...pairs];
    copyOfPairs.sort((a, b) => b.score - a.score);
    setPairs(copyOfPairs);
    setSortScoreBtnClicked(true);
    setSortNameBtnClicked(false);
  };
  const sortByName = (e) => {
    e.preventDefault();
    let copyOfPairs = [...pairs];
    copyOfPairs.sort((a, b) => a.name.localeCompare(b.name));
    setPairs(copyOfPairs);
    setSortNameBtnClicked(true);
    setSortScoreBtnClicked(false);
  };

  const sortByGroup = (e) => {
    e.preventDefault();
    const copyOfPairs = ingredient.allPairs.filter((item) => item.score !== 0);
    setPairs(copyOfPairs);
    setSortScoreBtnClicked(false);
    setSortNameBtnClicked(false);
  };
  const reducePairs = (group, name) => {
    const copyOfPairs = [...pairs];

    if (props.clicks === 0) {
      props.incClicks(1);
      props.setSecond(name);
      copyOfPairs.forEach((item, index) => {
        if (group === "Earthy") {
          if (
            item.group !== "Chocolate" &&
            item.group !== "Dairy" &&
            item.group !== "Floral" &&
            item.group !== "Meaty"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Berry") {
          if (item !== "Spice" && item !== "Floral") {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Citrus") {
          if (
            item !== "Alcohol" &&
            item !== "Medicinal" &&
            item !== "Melon" &&
            item !== "Suplhur" &&
            item !== "Tree Fruit" &&
            item !== "Wood" &&
            item !== "Nutty" &&
            item !== "Spice"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Dried Fruit") {
          if (item !== "Meaty" && item !== "Phenol") {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Melon") {
          if (
            item !== "Citrus" &&
            item !== "Fruit Like" &&
            item !== "Green" &&
            item !== "Suplhur" &&
            item !== "Savory"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Tree Fruit") {
          if (
            item !== "Citrus" &&
            item !== "Dairy" &&
            item !== "Floral" &&
            item !== "Fruit Like" &&
            item !== "Roasted" &&
            item !== "Savory" &&
            item !== "Petrol"
          ) {
            copyOfPairs(index, 1);
          }
        }

        if (group === "Tropical") {
          if (
            item !== "Dairy" &&
            item !== "Floral" &&
            item !== "Fruit Like" &&
            item !== "Wood" &&
            item !== "Savory" &&
            item !== "Spice"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Phenol") {
          if (
            item !== "Chocolate" &&
            item !== "Dried Fruit" &&
            item !== "Smoke"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Pungent") {
          if (item !== "Foral" && item !== "Sour") {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Caramel") {
          if (
            item !== "Alcohol" &&
            item !== "Fruit Like" &&
            item !== "Savory" &&
            item !== "Spice" &&
            item !== "Nutty"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Chocolate") {
          if (
            item !== "Alcohol" &&
            item !== "Dairy" &&
            item !== "Earthy" &&
            item !== "Fruit Like" &&
            item !== "Nutty" &&
            item !== "Phenol" &&
            item !== "Meaty"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Meaty") {
          if (
            item !== "Alcohol" &&
            item !== "Chocolate" &&
            item !== "Dried Fruit" &&
            item !== "Fruit Like" &&
            item !== "Earthy" &&
            item !== "Savory" &&
            item !== "Smoke"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Nutty") {
          if (
            item !== "Caramel" &&
            item !== "Chocolate" &&
            item !== "Fruit Like" &&
            item !== "Sulphur" &&
            item !== "Wood"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Roasted") {
          if (
            item !== "Marine" &&
            item !== "Petrol" &&
            item !== "Fruit Like" &&
            item !== "Sulphur" &&
            item !== "Tree Fruit"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Toasted") {
          if (item !== "Dairy" && item !== "Fruit Like") {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Medicinal") {
          if (
            item !== "Citrus" &&
            item !== "Green" &&
            item !== "Herbacious" &&
            item !== "Sour"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Spice") {
          if (
            item !== "Berry" &&
            item !== "Caramel" &&
            item !== "Citrus" &&
            item !== "Tropical" &&
            item !== "Wood" &&
            item !== "Smoke"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Smoke") {
          if (
            item !== "Meaty" &&
            item !== "Phenol" &&
            item !== "Sour" &&
            item !== "Spice"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Petrol") {
          if (item !== "Roasted" && item !== "Tree Fruit") {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Wood") {
          if (
            item !== "Citrus" &&
            item !== "Herbacious" &&
            item !== "Nutty" &&
            item !== "Spice" &&
            item !== "Tropical"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Marine") {
          if (item !== "Roasted" && item !== "Sour" && item !== "Savory") {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Sour") {
          if (
            item !== "Marine" &&
            item !== "Medcinal" &&
            item !== "Smoke" &&
            item !== "Pungent"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Savory") {
          if (
            item !== "Alcohol" &&
            item !== "Caramel" &&
            item !== "Marine" &&
            item !== "Melon" &&
            item !== "Meaty" &&
            item !== "Tree Fruit" &&
            item !== "Tropical"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Fruit Like") {
          if (
            item !== "Chocolate" &&
            item !== "Caramel" &&
            item !== "Nutty" &&
            item !== "Melon" &&
            item !== "Meaty" &&
            item !== "Tree Fruit" &&
            item !== "Toasted" &&
            item !== "Roasted"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Green") {
          if (item !== "Medicinal" && item !== "Melon") {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Herbacious") {
          if (item !== "Medicinal" && item !== "Green" && item !== "Wood") {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Alcohol") {
          if (
            item !== "Chocolate" &&
            item !== "Caramel" &&
            item !== "Citrus" &&
            item !== "Dairy" &&
            item !== "Meaty" &&
            item !== "Savory"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Sulphur") {
          if (
            item !== "Citrus" &&
            item !== "Melon" &&
            item !== "Nutty" &&
            item !== "Roasted"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Dairy") {
          if (
            item !== "Alcohol" &&
            item !== "Chocolate" &&
            item !== "Earthy" &&
            item !== "Floral" &&
            item !== "Toasted" &&
            item !== "Tree Fruit" &&
            item !== "Tropical"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }

        if (group === "Floral") {
          if (
            item !== "Berry" &&
            item !== "Dairy" &&
            item !== "Earthy" &&
            item !== "Pungent" &&
            item !== "Tree Fruit" &&
            item !== "Tropical"
          ) {
            copyOfPairs.splice(index, 1);
          }
        }
      });
    }

    if (props.clicks === 1) {
      props.setThird(name);
      props.incClicks(2);
    }
    setPairs(copyOfPairs);
  };

  return (
    <div className="pairingContainer">
      <div className="pairingContainer__buttons">
        <form>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            name="search"
          />
          {!sortScoreBtnClicked ? (
            <button onClick={sortByScore}>sort by best match</button>
          ) : (
            <button onClick={sortByGroup}>sort by group</button>
          )}
          {!sortNameBtnClicked ? (
            <button onClick={sortByName}>sort by name</button>
          ) : (
            <button onClick={(e) => sortByGroup}>sort by group</button>
          )}
        </form>
      </div>
      <div>
        {pairs.map((pair) => {
          return (
            <p
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

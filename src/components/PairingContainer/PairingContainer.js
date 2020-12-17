import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./PairingContainer.css";
import { groupColors } from "./../../HelperFunctions/colourGroups";
import GroupFilter from "../GroupFilter/GroupFilter";
import PairSorter from "../PairSorter/PairSorter";
import matchingGroups from "./../../HelperFunctions/matchingGroups";

function PairingContainer(props) {
  const [Singleingredient, setSingleIngredient] = useState({
    allPairs: [{ name: "", group: "", score: 0 }],
  });
  const [pairs, setPairs] = useState([]);
  const [pairsCopy, setPairsCopy] = useState([]);
  const { ingredient, setSecond, setThird, incClicks, clicks } = props;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.7 } },
  };

  useEffect(() => {
    ingredient[0] && setSingleIngredient(ingredient[0]);
  }, [ingredient]);

  useEffect(() => {
    const copyOfPairs = Singleingredient.allPairs.filter(
      (item) => item.score !== 0
    );
    setPairsCopy(copyOfPairs);
    setPairs(copyOfPairs);
  }, [Singleingredient]);

  const resetList = (e) => {
    e.preventDefault();
    setPairs(pairsCopy);
    setSecond("");
    setThird("");
    incClicks(0);
  };

  const setDisplay = (filteredPairs) => {
    setPairs(filteredPairs);
  };

  const reducePairs = (group, name) => {
    const copyOfPairs = [...pairs];
    const filtered = [];
    if (clicks === 0) {
      incClicks(1);
      setSecond(name);
      const matches = matchingGroups[group];
      copyOfPairs.forEach((pairObj) => {
        matches.forEach((matchStr) => {
          if (pairObj.group.includes(matchStr)) {
            filtered.push(pairObj);
          }
        });
      });
      setPairs(filtered);
    }
    if (clicks === 1) {
      setThird(name);
      incClicks(2);
    }
  };

  return (
    <div className="pairingContainer">
      <div className="pairingContainer__buttons">
        {clicks < 1 ? (
          <h2>
            Explore tastes and{" "}
            <strong style={{ fontWeight: "700" }}>click</strong> to match
            ingredients
          </h2>
        ) : (
          <h2>Click on your third ingredient!</h2>
        )}
        <div className="pairingContainer__options">
          <PairSorter
            setDisplay={setDisplay}
            resetList={resetList}
            pairs={pairs}
          />
        </div>
      </div>
      <div className="match__container">
        <AnimatePresence>
          {pairs.map((pair, index) => {
            return (
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                whileHover={{
                  scale: 1.05,
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.5, delayChildren: 0.8 },
                }}
                onClick={() => {
                  reducePairs(pair.group, pair.name);
                }}
                key={pair + index}
                className="matches"
              >
                <motion.div
                  key={pair + index * 45}
                  variants={item}
                  exit={{ opacity: 0 }}
                  className="pairingContainer__pair"
                >
                  <p className="pairing_text">{pair.name}</p>
                  <div className="pairing__bar_container">
                    <div
                      className="paring__bar"
                      style={{
                        backgroundColor: `${groupColors[pair.group]}`,
                        height: "15px",
                        width: `${pair.score + 10}%`,
                      }}
                    >
                      {pair.score}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="pairingContainer__selectGroup-container">
        <GroupFilter
          setDisplay={setDisplay}
          pairs={pairs}
          pairsCopy={pairsCopy}
          clicks={clicks}
        />
      </div>
    </div>
  );
}

export default PairingContainer;

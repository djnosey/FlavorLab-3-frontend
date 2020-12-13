import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./PairingContainer.css";
import { groupColors } from "./../../HelperFunctions/colourGroups";
import GroupFilter from "../GroupFilter/GroupFilter";
import PairSorter from "../PairSorter/PairSorter";
import matchingGroups from "./../../HelperFunctions/matchingGroups";

function PairingContainer(props) {
  const [ingredient, setIngredient] = useState({
    allPairs: [{ name: "", group: "", score: 0 }],
  });
  const [pairs, setPairs] = useState([]);
  const [pairsCopy, setPairsCopy] = useState([]);

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
    props.ingredient[0] && setIngredient(props.ingredient[0]);
  }, [props.ingredient]);

  useEffect(() => {
    const copyOfPairs = ingredient.allPairs.filter((item) => item.score !== 0);
    setPairsCopy(copyOfPairs);
    setPairs(copyOfPairs);
  }, [ingredient]);

  const resetList = (e) => {
    e.preventDefault();
    setPairs(pairsCopy);
    props.setSecond("");
    props.setThird("");
    props.incClicks(0);
  };

  const setDisplay = (filteredPairs) => {
    setPairs(filteredPairs);
  };

  const reducePairs = (group, name) => {
    const copyOfPairs = [...pairs];
    const filtered = [];

    if (props.clicks === 0) {
      props.incClicks(1);
      props.setSecond(name);

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

    if (props.clicks === 1) {
      props.setThird(name);
      props.incClicks(2);
    }
  };

  return (
    <div className="pairingContainer">
      <div className="pairingContainer__buttons">
        <h2>Explore tastes and click to match ingredients</h2>
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
                  transition: { duration: 0.9, delayChildren: 1 },
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
        />
      </div>
    </div>
  );
}

export default PairingContainer;

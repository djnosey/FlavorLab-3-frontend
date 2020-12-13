import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

function PairSorter(props) {
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    setPairs(props.pairs);
  }, [props.pairs]);

  useEffect(() => {
    props.setDisplay(pairs);
  }, [pairs]);

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
    let copyOfPairs = [...pairs];
    copyOfPairs.sort((a, b) => a.group.localeCompare(b.group));
    setPairs(copyOfPairs);
  };

  const handleSortChange = (e) => {
    if (e.target.value === "group") {
      sortByGroup(e);
    }
    if (e.target.value === "name") {
      sortByName(e);
    }
    if (e.target.value === "match") {
      sortByScore(e);
    }
  };
  return (
    <div>
      <FontAwesomeIcon
        onClick={(e) => props.resetList(e)}
        className="pairingContainer__icon"
        icon={faSyncAlt}
      />
      <select onChange={handleSortChange}>
        <option value="group">Sort by group</option>
        <option value="name">Sort by name</option>
        <option value="match">Sort by match</option>
      </select>
    </div>
  );
}

export default PairSorter;

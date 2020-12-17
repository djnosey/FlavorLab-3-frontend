import React, { useState, useEffect } from "react";
import "./GroupFilter.css";
import sortGroups from "./../../HelperFunctions/sortingGroups";

function GroupFilter(props) {
  const [pairs, setPairs] = useState([]);
  const [pairsCopy, setPairsCopy] = useState([]);

  useEffect(() => {
    setPairsCopy(props.pairsCopy);
  }, [props.pairsCopy]);

  useEffect(() => {
    setPairs(pairsCopy);
  }, [pairsCopy]);

  useEffect(() => {
    props.setDisplay(pairs);
  }, [pairs]);

  const groups = Object.keys(sortGroups);

  const handleGroupFilter = (e) => {
    const copyOfPairs = [...pairs];
    const arr = sortGroups[e.target.value];
    if (e.target.checked === false) {
      copyOfPairs.forEach((pair, index) => {
        arr.forEach((arrStr) => {
          if (pair.group === arrStr) {
            copyOfPairs.splice(index, 1, "remove");
          }
        });
      });
      let filtered = copyOfPairs.filter((item) => item !== "remove");
      setPairs(filtered);
    }
    if (e.target.checked === true) {
      const filtered = [];
      pairsCopy.forEach((pair) => {
        arr.forEach((group) => {
          if (pair.group === group) {
            filtered.push(pair);
            setPairs([...pairs, ...filtered]);
          }
        });
      });
    }
  };

  return (
    <div>
      {props.clicks < 1 ? (
        <form onChange={handleGroupFilter}>
          {groups.map((group) => {
            return (
              <span key={group}>
                <input
                  type="checkbox"
                  defaultChecked={true}
                  value={group}
                  name={group}
                />
                <label style={{ marginRight: "12px" }}>{group}</label>
              </span>
            );
          })}
        </form>
      ) : null}
    </div>
  );
}

export default GroupFilter;

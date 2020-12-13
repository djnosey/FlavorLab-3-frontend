import React, { useState, useEffect } from "react";
import "./GroupFilter.css";

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

  const handleGroupFilter = (e) => {
    const copyOfPairs = [...pairs];

    if (e.target.value === "Savoury" && e.target.checked === false) {
      const filtered = copyOfPairs.filter((item) => item.group !== "Savoury");
      setPairs(filtered);
    } else if (e.target.checked === true && e.target.value === "Savoury") {
      const filtered = pairsCopy.filter((item) => item.group === "Savoury");
      copyOfPairs.push(...filtered);
      setPairs(copyOfPairs);
    }

    if (e.target.value === "Marine" && e.target.checked === false) {
      const filtered = copyOfPairs.filter((item) => item.group !== "Marine");
      setPairs(filtered);
    } else if (e.target.checked === true && e.target.value === "Marine") {
      const filtered = pairsCopy.filter((item) => item.group === "Marine");
      copyOfPairs.push(...filtered);
      setPairs(copyOfPairs);
    }

    if (e.target.value === "Sour" && e.target.checked === false) {
      const filtered = copyOfPairs.filter((item) => item.group !== "Sour");
      setPairs(filtered);
    } else if (e.target.checked === true && e.target.value === "Sour") {
      const filtered = pairsCopy.filter((item) => item.group === "Sour");
      copyOfPairs.push(...filtered);
      setPairs(copyOfPairs);
    }

    if (e.target.value === "Floral" && e.target.checked === false) {
      const filtered = copyOfPairs.filter((item) => item.group !== "Floral");
      setPairs(filtered);
    } else if (e.target.checked === true && e.target.value === "Floral") {
      const filtered = pairsCopy.filter((item) => item.group === "Floral");
      copyOfPairs.push(...filtered);
      setPairs(copyOfPairs);
    }

    if (e.target.value === "Pungent" && e.target.checked === false) {
      const filtered = copyOfPairs.filter((item) => item.group !== "Pungent");
      setPairs(filtered);
    } else if (e.target.checked === true && e.target.value === "Pungent") {
      const filtered = pairsCopy.filter((item) => item.group === "Pungent");
      copyOfPairs.push(...filtered);
      setPairs(copyOfPairs);
    }

    if (e.target.value === "Phenol" && e.target.checked === false) {
      const filtered = copyOfPairs.filter((item) => item.group !== "Phenol");
      setPairs(filtered);
    } else if (e.target.checked === true && e.target.value === "Phenol") {
      const filtered = pairsCopy.filter((item) => item.group === "Phenol");
      copyOfPairs.push(...filtered);
      setPairs(copyOfPairs);
    }

    if (e.target.value === "Dairy" && e.target.checked === false) {
      const filtered = copyOfPairs.filter((item) => item.group !== "Dairy");
      setPairs(filtered);
    } else if (e.target.checked === true && e.target.value === "Dairy") {
      const filtered = pairsCopy.filter((item) => item.group === "Dairy");
      copyOfPairs.push(...filtered);
      setPairs(copyOfPairs);
    }

    if (e.target.value === "Sulphur" && e.target.checked === false) {
      const filtered = copyOfPairs.filter((item) => item.group !== "Sulphur");
      setPairs(filtered);
    } else if (e.target.checked === true && e.target.value === "Sulphur") {
      const filtered = pairsCopy.filter((item) => item.group === "Sulphur");
      copyOfPairs.push(...filtered);
      setPairs(copyOfPairs);
    }

    if (e.target.value === "Alcohol" && e.target.checked === false) {
      const filtered = copyOfPairs.filter((item) => item.group !== "Alcohol");
      setPairs(filtered);
    } else if (e.target.checked === true && e.target.value === "Alcohol") {
      const filtered = pairsCopy.filter((item) => item.group === "Alcohol");
      copyOfPairs.push(...filtered);
      setPairs(copyOfPairs);
    }

    if (e.target.value === "Vegetal" && e.target.checked === false) {
      const filtered = copyOfPairs.filter(
        (item) =>
          item.group !== "Earthy" &&
          item.group !== "Fruit Like" &&
          item.group !== "Green" &&
          item.group !== "Herbacious"
      );
      setPairs(filtered);
    } else if (e.target.checked === true && e.target.value === "Vegetal") {
      const filtered = pairsCopy.filter(
        (item) =>
          item.group === "Earthy" ||
          item.group === "Fruit Like" ||
          item.group === "Green" ||
          item.group === "Herbacious"
      );
      copyOfPairs.push(...filtered);
      setPairs(copyOfPairs);
    }

    if (e.target.value === "Fruity" && e.target.checked === false) {
      const filtered = copyOfPairs.filter(
        (item) =>
          item.group !== "Berry" &&
          item.group !== "Citrus" &&
          item.group !== "Melon" &&
          item.group !== "Tree Fruit" &&
          item.group !== "Tropical"
      );
      setPairs(filtered);
    } else if (e.target.checked === true && e.target.value === "Fruity") {
      const filtered = pairsCopy.filter(
        (item) =>
          item.group === "Berry" ||
          item.group === "Citrus" ||
          item.group === "Melon" ||
          item.group === "Tree Fruit" ||
          item.group === "Tropical"
      );
      copyOfPairs.push(...filtered);
      setPairs(copyOfPairs);
    }

    if (e.target.value === "Malliard" && e.target.checked === false) {
      const filtered = copyOfPairs.filter(
        (item) =>
          item.group !== "Caramel" &&
          item.group !== "Chocolate" &&
          item.group !== "Meaty" &&
          item.group !== "Nutty" &&
          item.group !== "Roasted" &&
          item.group !== "Toasted"
      );
      setPairs(filtered);
    } else if (e.target.checked === true && e.target.value === "Malliard") {
      const filtered = pairsCopy.filter(
        (item) =>
          item.group === "Caramel" ||
          item.group === "Chocolate" ||
          item.group === "Meaty" ||
          item.group === "Nutty" ||
          item.group === "Roasted" ||
          item.group === "Toasted"
      );
      copyOfPairs.push(...filtered);
      setPairs(copyOfPairs);
    }

    if (e.target.value === "Terpene" && e.target.checked === false) {
      const filtered = copyOfPairs.filter(
        (item) =>
          item.group !== "Medicinal" &&
          item.group !== "Smoke" &&
          item.group !== "Wood" &&
          item.group !== "Spice" &&
          item.group !== "Petrol"
      );
      setPairs(filtered);
    } else if (e.target.checked === true && e.target.value === "Terpene") {
      const filtered = pairsCopy.filter(
        (item) =>
          item.group === "Medicinal" ||
          item.group === "Smoke" ||
          item.group === "Wood" ||
          item.group === "Spice" ||
          item.group === "Petrol"
      );
      copyOfPairs.push(...filtered);
      setPairs(copyOfPairs);
    }
  };
  return (
    <div>
      <form onChange={handleGroupFilter}>
        <label>Vegetal</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Vegetal"
          name="Vegetal"
          id="hello"
        />
        <label>Alcohol</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Alcohol"
          name="Alcohol"
        />
        <label>Sulphur</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Sulphur"
          name="Sulphur"
        />
        <label>Dairy</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Dairy"
          name="Dairy"
        />
        <label>Floral</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Floral"
          name="Floral"
        />
        <label>Fruity</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Fruity"
          name="Fruity"
        />
        <label>Phenol</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Phenol"
          name="Phenol"
        />
        <label>Pungent</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Pungent"
          name="Pungent"
        />
        <label>Malliard</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Malliard"
          name="Malliard"
        />
        <label>Terpene</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Terpene"
          name="Terpene"
        />
        <label>Marine</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Marine"
          name="Marine"
        />
        <label>Sour</label>
        <input type="checkbox" defaultChecked={true} value="Sour" name="Sour" />
        <label>Savoury</label>
        <input
          type="checkbox"
          defaultChecked={true}
          value="Savoury"
          name="Savoury"
        />
      </form>
    </div>
  );
}

export default GroupFilter;

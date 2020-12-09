import React from "react";

function IngredientInfo(props) {
  return (
    <div>
      {props.ingredient[0] && <h1>Name: {props.ingredient[0].name}</h1>}
      {props.ingredient[0] && <h1>Main Group: {props.ingredient[0].group}</h1>}
      {props.ingredient[0] && (
        <h1>Sub Group: {props.ingredient[0].subGroup}</h1>
      )}
    </div>
  );
}

export default IngredientInfo;

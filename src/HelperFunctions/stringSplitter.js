const stringSplitter = (str) => {
  let slicedString = str.slice(13);
  let indexOfFirstComma = slicedString.indexOf(",");
  let slicedString2 = slicedString.slice(indexOfFirstComma + 2);
  let indexOfSecondComma = slicedString2.indexOf(",");
  let firstIngredient = slicedString.slice(0, indexOfFirstComma);
  let secondIngredient = slicedString2.slice(0, indexOfSecondComma);
  let slicedString3 = slicedString2.slice(indexOfSecondComma + 2, -9);
  let thirdIngredient = slicedString3;
  let comboSTR = `${firstIngredient} ${secondIngredient} ${thirdIngredient}`;
  let cleanedString = comboSTR.split("%20").join("");
  return [cleanedString, firstIngredient, secondIngredient, thirdIngredient];
};

export default stringSplitter;

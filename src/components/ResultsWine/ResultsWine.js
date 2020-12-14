import React from "react";
import "./ResultsWine.css";

function ResultsWine(props) {
  const { wine } = props;
  return (
    <div className="resultsWine__container">
      <h2>Wine Pairings and notes</h2>
      <div>
        {!wine.pairedWines || wine.pairedWines.length === 0
          ? null
          : wine.pairedWines.map((wine) => {
              return (
                <div key={wine}>
                  <h3>{"- " + wine}</h3>;
                </div>
              );
            })}
      </div>
      <div>
        {!wine.pairedWines || wine.pairedWines.length === 0 ? null : (
          <p>{wine.pairingText}</p>
        )}
      </div>
    </div>
  );
}

export default ResultsWine;

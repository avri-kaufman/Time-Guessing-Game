import React from "react";
import Result from "./Result";

function Footer({ lastResults, locations }) {
  return (
    <div>
      <h2 className="text-center fw-bold my-3">Last Guesses</h2>
      <div className="d-flex flex-row justify-content-center align-items-center gap-3 p-3 w-100 overflow-auto">
        {lastResults &&
          lastResults.map((res, index) => (
            <Result key={index} locations={locations} res={res} />
          ))}
      </div>
    </div>
  );
}

export default Footer;

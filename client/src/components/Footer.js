import React from "react";
import Result from "./Result";

function Footer({ lastResults, locations }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        overflowX: "auto",
        padding: "1rem",
        width: "100%",
      }}
    >
      {lastResults &&
        lastResults.map((res, index) => (
          <Result key={index} locations={locations} res={res} />
        ))}
    </div>
  );
}
export default Footer;

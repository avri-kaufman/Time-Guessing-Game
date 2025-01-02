import React from "react";
import { Card } from "react-bootstrap";

const Result = ({ res, locations }) => {
  const location = locations.find((loc) => loc.id === res.location_id);
  const locationName = location ? location.name : "Unknown Location";

  const extractBeforeSecondColon = (time) => {
    if (!time) return "N/A";
    const parts = time.split(":");
    return parts.length >= 2 ? `${parts[0]}:${parts[1]}` : time;
  };

  const formattedTimeGuess = extractBeforeSecondColon(res.time_guessed);
  const formattedActualTime = extractBeforeSecondColon(res.actual_time);

  return (
    <Card
      className="shadow-lg rounded-3 p-2"
      style={{
        minWidth: "280px",
        maxWidth: "300px",
        flex: "0 0 auto",
        backgroundColor: "#f8f9fa",
        border: "1px solid #e9ecef",
      }}
    >
      <Card.Body>
        <Card.Title className="text-center fw-bold mb-3 text-primary"></Card.Title>
        <div className="d-flex flex-column gap-2">
          <div className="p-2 bg-white rounded">
            <strong className="text-secondary">Location:</strong> {locationName}
          </div>
          <div className="p-2 bg-white rounded">
            <strong className="text-secondary">Time Guess:</strong>{" "}
            {formattedTimeGuess}
          </div>
          <div className="p-2 bg-white rounded">
            <strong className="text-secondary">Actual Time:</strong>{" "}
            {formattedActualTime}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Result;

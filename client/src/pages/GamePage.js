import React, { useState } from "react";
import LocationSearch from "../components/LocationSearch";
import GameTimePicker from "../components/GameTimePicker";
import { submitNewGuess } from "../services/guessApi";

function GamePage() {
  const [timeGuess, setTimeGuess] = useState(null);
  const [locationChoosed, setLocationChoosed] = useState(null);

  const handleSubmitGuess = async () => {
    submitNewGuess({ location_id: locationChoosed, timeGuess: timeGuess });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full md:w-2/5 lg:w-2/5 p-4 m-4 bg-white rounded-lg shadow-lg">
        <LocationSearch onLocationChoosed={setLocationChoosed} />
        <GameTimePicker onTimeChange={setTimeGuess} />
        <button type="button" class="btn btn-outline-dark">
          Submit Guess
        </button>
      </div>
    </div>
  );
}

export default GamePage;

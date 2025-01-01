import React, { useState } from "react";
import LocationSearch from "../components/LocationSearch";
import GameTimePicker from "../components/GameTimePicker";
import { submitNewGuess } from "../services/guessApi";

function GamePage() {
  const [timeGuess, setTimeGuess] = useState(null);
  const [location, setLocation] = useState(null);

  const handleSubmitGuess = async () => {
    if (location && timeGuess) {
      submitNewGuess({
        user_id: null,
        location_id: location.id,
        time_guess: timeGuess,
      });
    } else {
      alert("Please choose time and location!");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full md:w-2/5 lg:w-2/5 p-4 m-4 bg-white rounded-lg shadow-lg">
        <LocationSearch location={location} onLocationChange={setLocation} />
        <GameTimePicker time={timeGuess} onTimeChange={setTimeGuess} />
        <button
          onClick={handleSubmitGuess}
          type="button"
          class="btn btn-outline-dark"
        >
          Submit Guess
        </button>
      </div>
    </div>
  );
}

export default GamePage;

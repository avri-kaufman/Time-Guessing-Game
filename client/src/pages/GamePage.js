import React, { useEffect, useState } from "react";
import LocationSearch from "../components/LocationSearch";
import GameTimePicker from "../components/GameTimePicker";
import Footer from "../components/Footer";
import { submitNewGuess, fetchUserGuesses } from "../services/guessApi";
import { fetchLocations } from "../services/locationApi";

function GamePage() {
  const [timeGuess, setTimeGuess] = useState(null);
  const [location, setLocation] = useState(null);
  const [lastGuesses, setLastGuesses] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const guesses = await fetchUserGuesses(1);
        setLastGuesses(guesses);

        const locations = await fetchLocations();
        setLocations(locations);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmitGuess = async () => {
    if (location && timeGuess) {
      submitNewGuess({
        user_id: 1,
        location_id: location.id,
        time_guess: timeGuess,
      });
    } else {
      alert("Please choose time and location!");
    }
  };
  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
              <h2 className="text-center mb-4">Time Guessing Game</h2>
              <div className="mb-4">
                <LocationSearch
                  locations={locations}
                  location={location}
                  onLocationChange={setLocation}
                />
              </div>
              <div className="mb-4">
                <GameTimePicker time={timeGuess} onTimeChange={setTimeGuess} />
              </div>
              <div className="text-center">
                <button
                  onClick={handleSubmitGuess}
                  className="btn btn-primary btn-lg px-5"
                >
                  Submit Guess
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer lastResults={lastGuesses} locations={locations} />
    </div>
  );
}

export default GamePage;

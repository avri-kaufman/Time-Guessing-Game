import axios from "axios";

export const fetchUserGuesses = async (userId) => {
  try {
    const response = await axios.get(`/api/guesses/${userId}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user guesses: ", error);
    throw error;
  }
};

export const submitNewGuess = async (newGuess) => {
  try {
    console.log("new guess is: ", newGuess);
    const response = await axios.post("/api/guesses", newGuess);
    return response.data;
  } catch (error) {
    console.log("Error submiting new guess: ", error);
    throw error;
  }
};

import axios from "axios";

export const fetchLocations = async () => {
  try {
    const response = await axios.get("/api/locations");
    return response.data;
  } catch (error) {
    console.error("Error fetching locations: ", error);
    throw error;
  }
};

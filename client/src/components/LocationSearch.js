import React, { useState, useEffect } from "react";
import { fetchLocations } from "../services/locationApi";

function LocationSearch({ onLocationChoosed }) {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    const getLocations = async () => {
      try {
        const data = await fetchLocations();
        setLocations(data);
      } catch (error) {
        console.error("Error fetching locations: ", error);
      }
    };
    getLocations();
  }, []);

  const handleLocationChange = (event) => {
    const locationId = event.target.value;
    const selected = locations.find((loc) => loc.id === locationId);
    setSelectedLocation(locationId);
    if (onLocationChoosed && selected) {
      onLocationChoosed(selected);
    }
  };

  return (
    <div>
      <select
        id="location-select"
        value={selectedLocation}
        onChange={handleLocationChange}
      >
        <option value="" disabled>
          Choose Location
        </option>
        {locations.map((location) => (
          <option key={location.id} value={location.id}>
            {location.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LocationSearch;

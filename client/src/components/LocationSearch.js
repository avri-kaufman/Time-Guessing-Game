import React, { useState, useEffect } from "react";
import { fetchLocations } from "../services/locationApi";

function LocationSearch({ location, onLocationChange }) {
  const [locations, setLocations] = useState([]);

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
    const selectedLocation = locations.find(
      (loc) => loc.id === parseInt(locationId)
    );
    onLocationChange({ id: locationId, name: selectedLocation?.name || "" });
  };

  return (
    <div>
      <select
        id="location-select"
        value={location?.id || ""}
        onChange={handleLocationChange}
      >
        <option value="" disabled>
          Choose Location
        </option>
        {locations.map((loc) => (
          <option key={loc.id} value={loc.id}>
            {loc.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LocationSearch;

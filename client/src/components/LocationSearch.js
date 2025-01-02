import React from "react";

function LocationSearch({ location, onLocationChange, locations }) {
  const handleLocationChange = (event) => {
    const locationId = event.target.value;
    const selectedLocation = locations.find(
      (loc) => loc.id === parseInt(locationId)
    );
    onLocationChange({ id: locationId, name: selectedLocation?.name || "" });
  };

  // return (
  //   <div>
  //     <select
  //       id="location-select"
  //       value={location?.id || ""}
  //       onChange={handleLocationChange}
  //     >
  //       <option value="" disabled>
  //         Choose Location
  //       </option>
  //       {locations.map((loc) => (
  //         <option key={loc.id} value={loc.id}>
  //           {loc.name}
  //         </option>
  //       ))}
  //     </select>
  //   </div>
  // );
  return (
    <div className="form-group">
      <select
        id="location-select"
        value={location?.id || ""}
        onChange={handleLocationChange}
        className="form-select form-select-lg mb-3 shadow-sm"
        style={{
          borderRadius: "8px",
          padding: "12px",
          fontSize: "16px",
        }}
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

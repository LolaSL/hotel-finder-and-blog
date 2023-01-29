import React, { useState, createContext } from "react";

export const PlaceContext = createContext();

export const PlaceContextProvider = (props) => {
  const [places, setPlaces] = useState(null);

  const [selectedPlace, setSelectedPlace] = useState([]);

  return (
    <PlaceContext.Provider
      value={{
        // place,
        // setPlace,
        places,
        setPlaces,
        selectedPlace,
        setSelectedPlace,
      }}
    >
      {props.children}
    </PlaceContext.Provider>
  );
};
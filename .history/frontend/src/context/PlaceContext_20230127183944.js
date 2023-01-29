import React, { useState, createContext } from "react";

export const PlaceContext = createContext();

export const PlaceContextProvider = (props) => {
  const [places, setPlaces] = useState([]);
  const [place, setPlace]= useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <PlaceContext.Provider
      value={{
        place, setPlace
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
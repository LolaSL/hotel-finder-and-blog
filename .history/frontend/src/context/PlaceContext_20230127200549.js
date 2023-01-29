import React, { useState, createContext } from "react";

export const PlaceContext = createContext();

export const PlaceContextProvider = ({propschildren}) => {
  const [places, setPlaces] = useState([]);



  return (
    <PlaceContext.Provider
      value={{
        places,
        setPlaces
      }}
    >
      {children}
    </PlaceContext.Provider>
  );
};
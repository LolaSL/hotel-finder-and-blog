import React, { useState, createContext } from "react";

export const PlaceContext = createContext();

export const PlaceContextProvider = ({ props }) => {
  const [place, setPlace] = useState([]);
  const [loading, setLoading] = useState(true);


  return (
    <PlaceContext.Provider
      value={{
        place,
        setPlace
      }}
    >
      {props.children}
    </PlaceContext.Provider>
  );
};
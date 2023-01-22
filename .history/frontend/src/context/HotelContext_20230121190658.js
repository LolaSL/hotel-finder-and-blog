import React, { useState, createContext } from "react";

export const HotelsContext = createContext();

export const HotelsContextProvider = (props) => {
    const [hotels, setHotels] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  
    const addRestaurants = (restaurant) => {
      setRestaurants([...restaurants, restaurant]);
    };
    return (
      <RestaurantsContext.Provider
        value={{
          restaurants,
          setRestaurants,
          addRestaurants,
          selectedRestaurant,
          setSelectedRestaurant,
        }}
      >
        {props.children}
      </RestaurantsContext.Provider>
    );
  };
import React, { useState, createContext } from "react";
import PlaceService from '../services/place.service';

export const PlaceContext = createContext();

export const PlaceContextProvider = ({ children }) => {
    const [places, setPlaces] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    productService.getProducts(page).then((response) => {
      setProducts(response.data);
      setIsLoading(false);
    });
  }, [page]);

    return (
      <PlaceContext.Provider
        value={{
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
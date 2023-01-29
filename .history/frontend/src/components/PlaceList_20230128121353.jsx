import React, {useContext, useState, useEffect} from 'react';
import {PlaceContext} from "../context/PlaceContext";
import {Row} from "react-bootstrap";
import Place from "./Place";

const PlaceList =() => {
    const { place } = useContext(PlaceContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await HotelFinder.get("/");
            console.log(response.data.data);
            setHotels(response.data.data.hotels);
          } catch (err) {}
        };
    
        fetchData();
      }, [setHotels]);
    return (
        <Row className="d-flex">
            {place.places.map(place =>
                <Place key={place.id} place={place}/>
            )}
        </Row>
    );
};

export default PlaceList;
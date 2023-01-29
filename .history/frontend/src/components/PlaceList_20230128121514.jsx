import React, {useContext, useState, useEffect} from 'react';
import {PlaceContext} from "../context/PlaceContext";
import {Row} from "react-bootstrap";
import Place from "./Place";

const PlaceList =() => {
    const { place, setPlace } = useContext(PlaceContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await PlacelFinder.get("/");
            console.log(response.data.data);
            setPlace(response.data.data.place);
          } catch (err) {}
        };
    
        fetchData();
      }, [setPlace, setLoading]);
    return (
        <Row className="d-flex" loading ={loading}>
            {place.places.map(place =>
                <Place key={place.id} place={place}/>
            )}
        </Row>
    );
};

export default PlaceList;
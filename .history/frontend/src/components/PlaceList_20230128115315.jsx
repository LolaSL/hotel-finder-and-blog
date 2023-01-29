import React, {useContext} from 'react';
import {PlaceContext} from "../context";
import {Row} from "react-bootstrap";
import Place from "./Place";

const PlaceList =() => {
    const {place} = useContext(Context)

    return (
        <Row className="d-flex">
            {place.places.map(place =>
                <Place key={place.id} device={place}/>
            )}
        </Row>
    );
};

export default PlaceList;
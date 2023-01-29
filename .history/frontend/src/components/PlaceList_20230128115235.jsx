import React, {useContext} from 'react';
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

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
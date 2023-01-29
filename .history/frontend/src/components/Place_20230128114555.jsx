import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom"


const Place = ({place}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(`/${place.id}`)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={place.image_url1} alt={place.title}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>{place.title}</div>
                    <div className="d-flex align-items-center">
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{place.where_to_stay}</div>
            </Card>
        </Col>
    );
};

export default Place;
import React, {
useState,
  useEffect,
} from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import {  useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";
import Rings from "../components/Rings.jsx";
import Message from "../components/Message.jsx";
import { getError } from "../utils";

  



const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
};

const PlaceDetail = () => {
  const params = useParams();
  const { id } = params;
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState();

 
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`http://localhost:8090/api/v1/places/${id}`);
        console.log(response.data.data);
        setPlace(response.data.data.place);
     
      } catch (error) {
      
         toast.error(getError(error));
      
      
      }
    };
    fetchData();
  }, [id, setPlace]);

  
  return (
    loading ? (
      <Rings />
    ) : error ? (
      <Message variant="danger">{error}</Message>
    ) : (
      <div>
        <Helmet>
          <title>Place detail</title>
        </Helmet>
        <Card className="place border shadow rounded mt-4">
          <Card.Body className="content-title font-weight-light display-6 text-center">
            {place.title}
          </Card.Body>
          <div className="img p-2">
            <img
              src={place.image_url1}
              alt={place.title}
              className="place-image rounded shadow border img-fluid img-thumbnail"
            />
            <Card.Text className="content-place font-weight-light">
              {getText(place.where_to_stay)}
            </Card.Text>
            <Card.Text className="desc-place font-weight-light">
              {getText(place.description)}
            </Card.Text>
            <img
              src={place.image_url2}
              alt={place.title}
              className="place-image rounded shadow border img-fluid img-thumbnail"
            />
            <img
              src={place.image_url3}
              alt={place.title}
              className="place-image rounded shadow border img-fluid img-thumbnail"
            />
            {/* <Link className="link" to={`/place/${place.id}`}>
              <Button className="btn btn-home mb-2">Read More</Button>
            </Link> */}
          </div>
        </Card>
      </div>
    ))
}

       
export default PlaceDetail;

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

// const reducer = (state, action) => {
//   switch (action.type) {
  
//     case "FETCH_REQUEST":
//       return { ...state, loading: true };
//     case "FETCH_SUCCESS":
//       return { ...state, place: action.payload, loading: false };
//     case "FETCH_ERROR":
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
const PlaceDetail = () => {

  const params = useParams();
  const { id } = params;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [place, setPlace] = useState();

 
  // const [{ loading, error, place}, dispatch] = useReducer(reducer, {
  //   place: [],
  //   loading: true,
  //   error: "",
  // });
  // const { data } = axios.get(`http://localhost:8090/api/v1/places/${place.id}`);
  // const currentPlace = data.place.find((place) => place.id === id);

  useEffect(() => {
    const fetchData = async () => {
      // dispatch({ type: "FETCH_REQUEST" });
      try {
        setLoading(true)
        const result = await axios.get(`http://localhost:8090/api/v1/places/${id}`);
        // dispatch({ type: "FETCH_SUCCESS", payload: result.data});
      } catch (error) {
        // dispatch({ type: "FETCH_ERROR", payload: getError(error) });
         toast.error(getError(error));
        // dispatch({ type: 'CREATE_ERROR' });
      
      }
    };
    fetchData();
  }, [id,]);

  
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

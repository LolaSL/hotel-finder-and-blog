import React, {
  useReducer,
  useEffect,
  useContext,
  useState,
} from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Rating from "../components/Rating";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getError } from "../utils";
import { Store } from "../Store";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { toast } from "react-toastify";
  



const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'REFRESH_PRODUCT':
      return { ...state, product: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreateReview: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreateReview: false };
    case 'CREATE_ERROR':
      return { ...state, loadingCreateReview: false };
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const PlaceDetail = () => {

  const navigate = useNavigate();
  const params = useParams();

  const [{ loading, error, place, }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });
  const { id } = params;
  const reducer = (state, action) => {
    switch (action.type) {
      case "REFRESH_PLACE":
        return { ...state, place: action.payload };
      // case "CREATE_REQUEST":
      //   return { ...state, loadingCreateReview: true };
      // case "CREATE_SUCCESS":
      //   return { ...state, loadingCreateReview: false };
      // case "CREATE_ERROR":
      //   return { ...state, loadingCreateReview: false };
      case "FETCH_REQUEST":
        return { ...state, loading: true };
      case "FETCH_SUCCESS":
        return { ...state, place: action.payload, loading: false };
      case "FETCH_ERROR":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/v1/products/${id}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: getError(error) });
      }
    };
    fetchData();
  }, [id]);
  return (
    loading ? (
      <Loader />
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
    })
};

export default PlaceDetail;

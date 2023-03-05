import React, { useEffect, useReducer } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import moment from 'moment';
import Loader from '../components/Loader';
import Message from '../components/Message';
import PlaceKind from '../apis/PlaceKind';
import { getError } from "../utils";


const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
};

// const reducer = (state, action) => {
//     switch (action.type) {
//          case 'FETCH_REQUEST':
//         return { ...state, loading: true };
//       case 'FETCH_SUCCESS':
//         return { ...state, place: action.payload, loading: false };
//       case 'FETCH_ERROR':
//         return { ...state, loading: false, error: action.payload };
//       default:
//         return state;
//     }
// };
  

const PlaceDetail = () => {
 
    const params = useParams();
    const { id } = params;

    // const [{ loading, error, place}, dispatch] =
    // useReducer(reducer, {
    //  place: [],
    //   loading: true,
    //   error: '',
    // });

    useEffect(() => {
        const fetchData = async () => {
        //   dispatch({ type: 'FETCH_REQUEST' });
          try {
            const result = await PlaceKind.get(`/${id}`);
            // dispatch({ type: 'FETCH_SUCCESS', payload: result.data});
          } catch (err) {
            dispatch({ type: 'FETCH_ERROR', payload: getError(err) });
          }
        };
        fetchData();
      }, [id]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div>
      <Card className="place border shadow rounded mt-4">
          <Card.Body className="content-title font-weight-light display-6 text-center">
          {place.title}
    </Card.Body>
         <div className="img p-2">
            <img
             className="place-image rounded shadow border img-fluid img-thumbnail" 
            src={place.image_url1}
            alt={place.title}/>
          </div>
      <Card.Text className="desc-place fw-bold">
              Destination:   {place.destination}
              </Card.Text>
              <Card.Text className="content-place font-weight-light">
            {getText(place.where_to_stay)}
          </Card.Text>
          <Card.Text className="desc-place font-weight-light">
            {getText(place.description)}
          </Card.Text>
          <img
            src={place.image_url2}
            alt={place.title}
            className="place-image rounded shadow border img-fluid img-thumbnail mb-2"
          />
          <img
            src={place.image_url3}
            alt={place.title}
            className="place-image rounded shadow border img-fluid img-thumbnail"
          />
          <p className="created_at">Created {moment(place.created_at).format("YYYY-MM-DD")}</p>
   </Card>
    </div>
          
        );
      };
      export default PlaceDetail;
              
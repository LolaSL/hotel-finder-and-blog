import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Store } from '../Store';
import { getError } from '../utils';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Button from 'react-bootstrap/Button';



const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_ERROR':
      return { ...state, loadingUpdate: false };
    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: '',
      };
    case 'UPLOAD_ERROR':
      return { ...state, loadingUpload: false, errorUpload: action.payload };

    default:
      return state;
  }
};
const CreatePlace = () => {
  const navigate = useNavigate();
  const params = useParams(); 
  const { id: placeId } = params;
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

    const [title, setTitle] = useState('');
  const [where_to_stay, setWhereToStray] = useState('')
  const[image, setImage] = useState('')
    const [image_url1, setImageUrl1] = useState('');
    const [image_url2, setImageUrl2] = useState('');
    const [image_url3, setImageUrl3] = useState('');
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`http://localhost:8090/api/v1/places/${placeId}`);
        setTitle(data.title);
        setWhereToStray(data.where_to_stay);
        setDescription(data.description);
        setImageUrl1(data.image_url1);
        setImageUrl2(data.image_url2);
        setImageUrl3(data.image_url3);
       
        dispatch({ type: 'FETCH_SUCCESS' });
      } catch (err) {
        dispatch({
          type: 'FETCH_ERROR',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [placeId]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(
        `/api/products/${placeId}`,
        {
          id: placeId,
         title,
          where_to_stay,
          description,
          image_url1,
          image_url2,
          image_url3,
         
        },
        // {
        //   headers: { Authorization: `Bearer ${userInfo.token}` },
        // }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      toast.success('Place updated successfully');
      navigate('/places');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPDATE_ERROR' });
    }
  };
  const uploadFileHandler = async (e, forImages) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const { data } = await axios.post('/api/v1/upload', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: 'UPLOAD_SUCCESS' });

      if (forImages) {
        setImages([...images, data.secure_url]);
      } else {
        setImage(data.secure_url);
      }
      toast.success('Image uploaded successfully. Click to update, please');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPLOAD_ERROR', payload: getError(err) });
    }
  };
return (
  <Container className="small-container">
    <Helmet>
      <title>Edit Place ${placeId}</title>
    </Helmet>
    <h1>Edit Product {placeId}</h1>

    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant="danger">{error}</Message>
    ) : (
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        {/* </Form.Group>
        <Form.Group className="mb-3" controlId="slug">
          <Form.Label>Slug</Form.Label>
          <Form.Control
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </Form.Group> */}
        {/* <Form.Group className="mb-3" controlId="name">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          /> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image File</Form.Label>
          <Form.Control
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="imageFile">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" onChange={uploadFileHandler} />
          {loadingUpload && <Loader></Loader>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            value={where_to_stay}
            onChange={(e) => setWhereToStray(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="brand">
          <Form.Label>image_url1</Form.Label>
          <Form.Control
            value={image_url1}
            onChange={(e) => setImageUrl1(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="countInStock">
          <Form.Label>Count In Stock</Form.Label>
          <Form.Control
            value={image_url2}
            onChange={(e) => setImageUrl2(e.target.value)}
            required
          />
            </Form.Group>
            <Form.Group className="mb-3" controlId="countInStock">
          <Form.Label>Count In Stock</Form.Label>
          <Form.Control
            value={image_url2}
            onChange={(e) => setImageUrl2(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <div className="mb-3">
          <Button disabled={loadingUpdate} type="submit">
            Update
          </Button>
          {loadingUpdate && <Loader></Loader>}
        </div>
      </Form>
    )}
  </Container>
);
}

export default CreatePlace;

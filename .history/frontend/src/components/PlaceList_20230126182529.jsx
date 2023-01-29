import React, { useEffect, useContext } from "react";
import HotelFinder from "../apis/HotelFinder";
import { HotelsContext } from "../context/HotelsContext";
import { useNavigate } from "react-router-dom";
import Conta

const PlaceList = () => {

    const { hotels, setHotels } = useContext(HotelsContext);
    let navigate = useNavigate();
  
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
  
    const handleDelete = async (e, id) => {
      e.stopPropagation();
      try {
        const response = await HotelFinder.delete(`/${id}`);
        setHotels(
          hotels.filter((hotel) => {
            return hotel.id !== id;
          })
        );
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    const handleUpdate = (e, id) => {
      e.stopPropagation();
      navigate(`/hotels/${id}/update`);
    };
  
    const handleHotelSelect = (id) => {
      navigate(`/hotels/${id}`);
    };
    return (
          <Container>
        <h1 className="text-center mb-2 py-4 fw-bold">Featured Arts</h1>
        <div className="products">
          {loading ? (
            <Loader/>
          ) : error ? (
           <Message variant="danger">{error}</Message>
          ) : (
            <Row>
              {productList.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3 pt-2">
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
            </div>
        </Container>
    );
  };
  

export default PlaceList
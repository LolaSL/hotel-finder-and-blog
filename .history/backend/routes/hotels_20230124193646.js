const db = require("./db");
const { Router } = require('express');
const hotelRouter = Router();


 hotelRouter.get("/", async (req, res) => {
    try {
      // const results = await db.query("select * from hotels");
      const hotelRatingsData = await db.query(
        "select * from hotels left join (select hotels_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by hotels_id) reviews on hotels.id = reviews.hotels_id order by hotels_id asc;"
      );
      // console.log("results: ", results);
      // console.log("hotel data: ", hotelRatingsData);
  
      res.status(200).json({
        status: "success",
        results: hotelRatingsData.rows.length,
        data: {
          hotels: hotelRatingsData.rows,
        },
      });
    } catch (err) {
      console.log(err);
    }
  });
  //Get a Hotel
  hotelRouter.get("/:id", async (req, res) => {
    console.log(req.params.id);
  
    try {
      const hotel = await db.query(
        "select * from hotels left join (select hotels_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by hotels_id) reviews on hotels.id = reviews.hotels_id where id = $1",
        [req.params.id]
      );
      // select * from hotels where id = req.params.id
  
      const reviews = await db.query(
        "select * from reviews where hotels_id = $1",
        [req.params.id]
      );
      console.log(reviews);
  
      res.status(200).json({
        status: "succes",
        data: {
          hotel: hotel.rows[0],
          reviews: reviews.rows,
        },
      });
    } catch (err) {
      console.log(err);
    }
  });
  
  // Create a Hotel
  
  hotelRouter.post("/api/v1/hotels", async (req, res) => {
    console.log(req.body);
    try {
      const results = await db.query(
        "INSERT INTO hotels ( name, location, price_range) values ($1, $2, $3) returning *",
        [req.body.name, req.body.location, req.body.price_range]
      );
      console.log(results);
      res.status(201).json({
        status: "succes",
        data: {
          hotel: results.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  });
  
  // Update Hotels
  
  hotelRouter.put("/api/v1/hotels/:id", async (req, res) => {
    try {
      const results = await db.query(
        "UPDATE hotels SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
        [req.body.name, req.body.location, req.body.price_range, req.params.id]
      );
  
      res.status(200).json({
        status: "succes",
        data: {
          hotel: results.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
    console.log(req.params.id);
    console.log(req.body);
  });
  
  // Delete Hotel
  
  hotelRouter.delete("/api/v1/hotels/:id", async (req, res) => {
    try {
      const results = db.query("DELETE FROM hotels where id = $1", [
        req.params.id,
      ]);
      res.status(204).json({
        status: "sucess",
      });
    } catch (err) {
      console.log(err);
    }
  });
  
  hotelRouter.post("/api/v1/hotels/:id/addReview", async (req, res) => {
    try {
      const newReview = await db.query(
        "INSERT INTO reviews (hotels_id, name, review, rating) values ($1, $2, $3, $4) returning *;",
        [req.params.id, req.body.name, req.body.review, req.body.rating]
      );
      console.log(newReview);
      res.status(201).json({
        status: "success",
        data: {
          review: newReview.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  });

  module.exports = hotelRouter
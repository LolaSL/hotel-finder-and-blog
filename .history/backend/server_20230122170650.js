require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const logger = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('combined'));

app.get("/api/v1/hotels", async (req, res) => {
  try {
        const results = await db.query("select * from hotels");
      const hotelRatingsData = await db.query(
          "select * from hotels left join (select hotels_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by hotels_id) reviews on hotels.id = reviews.hotels_id;"
      );

      res.status(200).json({
          status: "success",
          results: hotelRatingsData.rows.length,
          data: {
              hotels: hotelRatingsData.rows,
          },
      });console.log(results);
  } catch (err) {
      console.log(err);
  }
});
//Get a Restaurant
app.get("/api/v1/hotels/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    const hotel = await db.query(
      "select * from hotels left join (select hotel_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by hotel_id) reviews on hotels.id = reviews.hotel_id where id = $1",
      [req.params.id]
    );
    // select * from hotels wehre id = req.params.id

    const reviews = await db.query(
      "select * from reviews where hotel_id = $1",
      [req.params.id]
    );
    console.log(reviews);

    res.status(200).json({
      status: "succes",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});



app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
  next();
})
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${process.env.PORT || 8080}`);
});
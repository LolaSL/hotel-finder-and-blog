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
      //const results = await db.query("select * from restaurants");
      const hotelRatingsData = await db.query(
        "select * from hotels left join (select hotel_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by hotel_id) reviews on hotel.id = reviews.restaurant_id;"
      );
  
      res.status(200).json({
        status: "success",
        results: restaurantRatingsData.rows.length,
        data: {
          restaurants: restaurantRatingsData.rows,
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
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${process.env.PORT || 8080}`);
});
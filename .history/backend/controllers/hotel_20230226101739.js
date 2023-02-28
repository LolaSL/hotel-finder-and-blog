const pool = require("../db");



//Get the Hotels
exports.getHotels = async (req, res) => {
  try {
    const hotelRatingsData = await pool.query(
      "select * from hotels left join (select hotels_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by hotels_id) reviews on hotels.id = reviews.hotels_id order by average_rating asc;"
    );
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
};
//Get a Hotel

exports.getHotelById = async (req, res) => {
  console.log(req.params.id);

  try {
    const hotel = await pool.query(
      "select * from hotels left join (select hotels_id, COUNT(*), TRUNC(AVG(rating) , 1) as average_rating from reviews group by hotels_id) reviews on hotels.id = reviews.hotels_id where id = $1",
      [req.params.id]
    );
    // select * from hotels where id = req.params.id

    const reviews = await pool.query(
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
};

// Create a Hotel

exports.createHotel = async (req, res) => {
  console.log(req.body);
  try {
    const results = await pool.query(
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
};

// Update Hotels

exports.updateHotel = async (req, res) => {
  try {
    const results = await pool.query(
      "UPDATE hotels SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
const  updatRreview = await pool.query(
  "UPDATE reviews SET review = $1 where id = $1 returning *",
  [req.body.review, req.params.id]
);

    res.status(200).json({
      status: "succes",
      data: {
        hotel: results.rows[0],
        review: review.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
  console.log(req.body);
};

// Delete Hotel

exports.removeHotel = async (req, res) => {
  try {
    const results = pool.query("DELETE FROM hotels where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.addReview = async (req, res) => {

  try {
    const newReview = await pool.query(
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
};

//UpdateReview


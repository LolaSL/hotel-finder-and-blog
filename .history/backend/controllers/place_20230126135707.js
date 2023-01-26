const db = require("../db");



//Get the Hotels
exports.getPlaces = async (req, res) => {
    try {
      const places = await db.query(
        "select * from hotels order by id asc;"
      );
      res.status(200).json({
        status: "success",
        results: places.rows.length,
        data: {
          hotels: hotelRatingsData.rows,
        },
      });
    } catch (err) {
      console.log(err);
    }
};
  
  //Get a Place

exports.getPlaceById= async (req, res) => {
    console.log(req.params.id);
  
    try {

      const place = await db.query(
        "select * from places where id = $1",
        [req.params.id]
      );
      console.log(place);
  
      res.status(200).json({
        status: "succes",
        data: {
          place: place.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  // Create a Place

exports.createPlace = async (req, res) => {
    console.log(req.body);
    try {
      const results = await db.query(
        "INSERT INTO places ( title, description) values ($1, $2) returning *",
        [req.body.title, req.body.description]
      );
      console.log(results);
      res.status(201).json({
        status: "succes",
        data: {
          place: results.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  // Update Places

exports.updateHotel = async (req, res) => {
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
  };
  
  // Delete Hotel

exports.removeHotel = async (req, res) => {
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
  };
  
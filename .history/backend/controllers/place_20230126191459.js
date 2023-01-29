const db = require("../db");



//Get the Hotels
exports.getPlaces = async (req, res) => {
    try {
      const places = await db.query(
        "select * from places order by id asc;"
      );
      res.status(200).json({
        status: "success",
        data: {
         places: places.rows,
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
        "INSERT INTO places ( title, where_to_stay, description, image_url1, image_url2, image_url3) values ($1, $2, $3, $4, $5, $6) returning *",
        [req.body.title, req.body.where_to_stay, req.body.description]
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
  

  
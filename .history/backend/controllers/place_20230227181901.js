const pool = require("../db");

//Get Place
exports.getPlaces = async (req, res) => {
  pool.query('SELECT * FROM places', (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};
//Get place by id
exports.getPlaceById = async (req, res) => {

  console.log(req.params.id);
  try {

    const place = await pool.query(
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

//Get by destination
exports.getPlaceByDestination = async (req, res) => {

  // console.log(req.params.destination);
  try {

    const place= await pool.query(
      "select * from places destination = $1",
      [req.params.destination] 
    );
    console.log(destination);

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
    const results = await pool.query(
      "INSERT INTO places ( title, where_to_stay, description, image_url1, image_url2, image_url3, destination) values ($1, $2, $3, $4, $5, $6) returning *",
      [req.body.title, req.body.where_to_stay, req.body.description, req.body.image_url1, req.body.image_url2, req.body.image_url3,  req.body.destination]
    );
    console.log(results);
    res.status(201).json({
      status: "succes",
      data: {
        place: results.rows[0],
      },
    });
  }
  catch (err) {
    console.log(err);
  }
};

//Update place by id

exports.updatePlace = async (req, res) => {
  try {
    const results = await pool.query(
      "UPDATE places SET title = $1, where_to_stay = $2, description = $3, image_url1 = $4, image_url2 = $5, image_url3 = $6, destination = $7 where id = $8 returning *",
      [req.body.title, req.body.where_to_stay, req.body.description, req.body.image_url1, req.body.image_url2, req.body.image_url3, req.body.destination, req.params.id]
    );

    res.status(200).json({
      status: "succes",
      data: {
        place: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
  console.log(req.body);
};


//Delete place by id
exports.deletePlace = async (req, res) => {
  try {
    const results = pool.query("DELETE FROM places WHERE id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
};

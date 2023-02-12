const pool = require("../db");


exports.getPlaces = async (req, res) => {
  pool.query('SELECT * FROM places', (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};
//Get a Place
exports.getPlaceById = async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(req.params.id);
  pool.query('SELECT * FROM places WHERE id = $1;',
    [id], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows[0]);
    })
}


// Create a Place




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

exports.createPlace = (req, res) => {
  const { title, whete_to_stay, description,  photo, slug, uid } = req.body;
  pool.query('INSERT INTO posts(title, description,  photo, slug,  uid ) VALUES( $1, $2, $3, $4, $5);', [title, description,  photo, slug, uid], (error, results) => {

    if (error) throw error;
    res.status(201).json('Post has just createted successfully!');
  });
}
  

  
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

// Create a Place

exports.createPlace = async (req, res) => {
  console.log(req.body);
  try {
    const results = await pool.query(
      "INSERT INTO places ( title, where_to_stay, description, image_url1, image_url2, image_url3) values ($1, $2, $3, $4, $5, $6) returning *",
      [req.body.title, req.body.where_to_stay, req.body.description, req.body.image_url1, req.body.image_url2, req.body.image_url3]
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


exports.updatePlace = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(req.params.id);
  const { title, description } = req.body;
  pool.query('SELECT * FROM posts WHERE id = $1;',
    [id], (error, results) => {
      const noPostFound = !results.rows.length;
      if (noPostFound) {
        res.send('Post does not exist!');
      }
      pool.query('UPDATE posts SET title = $1,  description = $2  WHERE id = $3;', [title, description, id], (error, results) => {
        if (error) throw error;
        res.status(200).send('Post has updated successfully!');
      })

    })
}

const deletePostById = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(req.params.id);

  pool.query('SELECT * FROM posts WHERE id = $1;',
    [id], (error, results) => {
      const noPostFound = !results.rows.length;
      if (noPostFound) {
        res.send('Post does not exist!');
      }
      pool.query('DELETE FROM posts WHERE id = $1;',
        [id], (error, results) => {
          if (error) throw error;
          res.status(200).send('Post has removed successfully!');
        })
    })
}



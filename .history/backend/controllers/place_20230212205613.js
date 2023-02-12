const pool = require("../db");

//Get the places
// exports.getPlaces = async (req, res) => {
//     try {
//       const places = await pool.query(
//         "select * from places;"
//       );
//       res.status(200).json({
//         status: "success",
//         data: {
//          places: places.rows,
//         },
//       });
//     } catch (err) {
//       console.log(err);
//     }
// };
exports.getPlaces = async (req, res) => {
  pool.query('SELECT * FROM places', (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};
  //Get a Place
  // exports.getPlaceById = async (req, res) => {
  //   const id = parseInt(req.params.id);
  //   console.log(req.params.id);
  //   pool.query('SELECT * FROM places WHERE id = $1;',
  //     [id], (error, results) => {
  //       if (error) throw error;
  //       res.status(200).json(results.rows[0]);
  //     })
  // }
// exports.getPlaceById = async (req, res) => {

//     console.log(req.params.id);
//     try {

//       const place = await db.query(
//         "select * from places where id = $1",
//         [req.params.id]
//       );
//       console.log(place);
  
//       res.status(200).json({
//         status: "succes",
//         data: {
//           place: place.rows[0],
//         },
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
  // Create a Place

exports.createPlace = async (req, res) => {
    console.log(req.body);
    try {
      const results = await db.query(
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
    } catch (err) {
      console.log(err);
    }
  };
  

  
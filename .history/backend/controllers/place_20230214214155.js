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

// exports.createPlace = async (req, res) => {
//   console.log(req.body);
  
//     try {
//       const results = await pool.query(
//         "INSERT INTO places ( title, where_to_stay, description, image_url1, image_url2, image_url3) values ($1, $2, $3, $4, $5, $6) returning *",
//         [req.body.title, req.body.where_to_stay, req.body.description, req.body.image_url1, req.body.image_url2, req.body.image_url3]
//       );
//       console.log(results);
//       res.status(201).json({
//         status: "succes",
//         data: {
//           place: results.rows[0],
//         },
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
  exports.createPost =  (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", async (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
      const results = await pool.query("INSERT INTO places ( title, where_to_stay, description, image_url1, image_url2, image_url3) values ($1, $2, $3, $4, $5, $6) returning *",
              [req.body.title, req.body.where_to_stay, req.body.description, req.body.image_url1, req.body.image_url2, req.body.image_url3]
      )  
      // const q =
      //   "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";
  
      // const values = [
      //   req.body.title,
      //   req.body.desc,
      //   req.body.img,
      //   req.body.cat,
      //   req.body.date,
      //   userInfo.id,
      // ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Post has been created.");
      });
    });
  };
  

  
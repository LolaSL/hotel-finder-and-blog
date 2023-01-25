require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const hotelRouter =require("./routes/hotels")
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('combined'));


//initialize routes
app.use('/api/v1/hotels', hotelRouter)


// Create a user/singup

// app.post("/api/v1/users/signup", async (req, res) => {
//   console.log(req.body);
//   try {
//     const results = await db.query(
//       "INSERT INTO users ( name, email, password) values ($1, $2, $3) returning *",
//       [req.body.name, req.body.email, req.body.password]
//     );
//     console.log(results);
//     res.status(201).json({
//       status: "succes",
//       data: {
//         user: results.rows[0],
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });


app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
  next();
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${process.env.PORT || 8080}`);
});
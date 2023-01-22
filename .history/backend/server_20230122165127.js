require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const hotelRouter = require("./routes/hotelRouter");
const logger = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('combined'));

app.get("/api/v1/", 
  

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
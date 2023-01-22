require("dotenv").config();
const express = require("express");
const cors = require("cors");


const logger = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('combined'));


app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
    next();
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`
  app.use((error, req, res, next) => {
      res.status(error.status || 500).send({
          error: {
              status: error.status || 500,
              message: error.message || 'Internal Server Error',
          },
      });
      next();
  })`);
});
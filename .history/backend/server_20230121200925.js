require("dotenv").config();
const express = require("express");
const cors = require("cors");


const logger = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('combined'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is up and listening on port http://localhost:${port}`);
});
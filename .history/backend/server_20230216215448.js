if (process.env.NODE_ENV !== 'production npm start') {
  require('dotenv').config({ override: true });
}
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const hotelRouter = require("./routes/hotels.js");
const placeRouter = require("./routes/places.js");
const authRouter = require("./routes/auth.js");
const CLIENT_URL = process.env.CLIENT_URL;
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('cookie-session');
const TWO_HOURS = 60 * 60 * 1000 * 13;
const SESS_SECRET = process.env.SESS_SECRET;
const multer = require('multer');

const app = express();

app.use(cors({ origin: CLIENT_URL, credentials: true }))
app.use(express.json());
app.use(cookieParser());
app.use(session({
  name: process.env.SESS_NAME,
  cookieName: 'session',
  resave: false,
  saveUninitialized: true,
  secret: SESS_SECRET,
  cookie: {
    secure: process.env.NODE_ENV === 'production' ? "true" : "auto",
    sameSite: process.env.NODE_ENV === 'production' ? "none" : "lax",
    maxAge: TWO_HOURS,

  },

}));



app.use(logger('combined'));
app.use(passport.initialize())
require('./middlewares/passport_middleware')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/v1/upload", upload.array("file"), function (req, res) {
  const file = req.file;
      console.log(req.body);
    console.log(req.files);
  res.status(200).json({ message: "Successfully uploaded file" });
});

//initialize routes
app.use('/api/v1/hotels', hotelRouter)
app.use('/api/v1/places', placeRouter)
app.use('/api/v1/auth', authRouter)


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
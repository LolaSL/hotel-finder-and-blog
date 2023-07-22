
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const hotelRouter = require("./routes/hotels.js");
const placeRouter = require("./routes/places.js");
const authRouter = require("./routes/auth.js");
// const CLIENT_URL = process.env.CLIENT_URL;
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require("cookie-session");
const TWO_HOURS = 60 * 60 * 1000 * 13;
const SESS_SECRET = process.env.SESS_SECRET;
const cookieSession = require('cookie-session');
const keys = require('./middlewares/keys.js');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
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
    withCredentials: true
  },
}));
app.use(cookieSession({
  name: 'session',
  keys: keys
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers, *, Access-Control-Allow-Origin', 'Origin, X-Requested-with, Content_Type,Accept,Authorization', 'http://localhost:3000');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
    return res.status(200).json({});
  }
  next();
});
app.use(logger('combined'));
app.use(passport.initialize());
require('./middlewares/passport_middleware');

// Initialize routes
app.use('/api/v1/hotels', hotelRouter);
app.use('/api/v1/places', placeRouter);
app.use('/api/v1/auth', authRouter);

// // const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, 'frontend/build')));

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
// });

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
  next();
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});


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
const session = require("cookie-session");
const TWO_HOURS = 60 * 60 * 1000 * 13;
const SESS_SECRET = process.env.SESS_SECRET;
const cookieSession = require('cookie-session');
const keys = require('./middlewares/keys.js');
const path = require('path')
const MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options => {
  options.AddPolicy(MyAllowSpecificOrigins,
    builder => {
      builder.WithOrigins("http://localhost",
        "http://localhost:3000",
        "https://localhost:8090",
        "https://localhost:8080"
       )
        .AllowAnyMethod()
        .AllowAnyHeader()
        .SetIsOriginAllowedToAllowWildcardSubdomains();
    });
});
const app = express();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors(MyAllowSpecificOrigins);
app.use(cors({ origin: CLIENT_URL, credentials: true }));
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
app.use(cookieSession({
  name: 'session',
  keys: keys
}))

// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'https://64873d35161f3f4b47dec7d7--musical-cuchufli-0080ed.netlify.app/');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//   next();
// });

app.use(logger('combined'));
app.use(passport.initialize());
require('./middlewares/passport_middleware');

//initialize routes
app.use('/api/v1/hotels', hotelRouter);
app.use('/api/v1/places', placeRouter);
app.use('/api/v1/auth', authRouter);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

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
  console.log(`Server is listening on http://localhost:${process.env.PORT || 8080}`)
  console.log('Express server started on port %s at %s', server.address().port, server.address().address);;
});
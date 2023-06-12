// if (process.env.NODE_ENV !== 'production npm start') {
//   require('dotenv').config({ override: true });
// }
// const express = require("express");
// const cors = require("cors");
// const logger = require("morgan");
// const hotelRouter = require("./routes/hotels.js");
// const placeRouter = require("./routes/places.js");
// const authRouter = require("./routes/auth.js");
// const CLIENT_URL = process.env.CLIENT_URL;
// const cookieParser = require('cookie-parser');
// const passport = require('passport');
// const session = require("cookie-session");
// const TWO_HOURS = 60 * 60 * 1000 * 13;
// const SESS_SECRET = process.env.SESS_SECRET;
// const cookieSession = require('cookie-session');
// const keys = require('./middlewares/keys.js');
// const path = require('path')
// const WebApplication = require;
// const args ="args"


// var builder = WebApplication.CreateBuilder(args);

    
// // Add services to the container.

// builder.Services.AddControllers();

// // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();
// //services cors
// builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
// {
//     builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
// }));

// var app = builder.Build();

// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
    
// }
//    //app cors
//     app.UseHttpsRedirection();
//     app.UseRouting();
//     app.UseCors("corsapp");
//     app.UseAuthorization();

//     //app.UseCors(prodCorsPolicy);

// app.MapControllers();



// app.use(cors({ origin: CLIENT_URL, credentials: true }));
// app.use(express.json());
// app.use(cookieParser());
// app.use(session({
//   name: process.env.SESS_NAME,
//   cookieName: 'session',
//   resave: false,
//   saveUninitialized: true,
//   secret: SESS_SECRET,
//   cookie: {
//     secure: process.env.NODE_ENV === 'production' ? "true" : "auto",
//     sameSite: process.env.NODE_ENV === 'production' ? "none" : "lax",
//     maxAge: TWO_HOURS,

//   },

// }));
// app.use(cookieSession({
//   name: 'session',
//   keys: keys
// }))


// app.use(logger('combined'));
// app.use(passport.initialize());
// require('./middlewares/passport_middleware');

// //initialize routes
// app.use('/api/v1/hotels', hotelRouter);
// app.use('/api/v1/places', placeRouter);
// app.use('/api/v1/auth', authRouter);

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.use((error, req, res, next) => {
//   res.status(error.status || 500).send({
//     error: {
//       status: error.status || 500,
//       message: error.message || 'Internal Server Error',
//     },
//   });
//   next();
// });

// const port = process.env.PORT || 8080;

// app.listen(port, () => {
//   console.log(`Server is listening on http://localhost:${process.env.PORT || 8080}`)

// });
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
const WebApplication = require;
const args ="args"

var appBuilder = WebApplication.CreateBuilder(args);

// Add services to the container.
appBuilder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
appBuilder.Services.AddEndpointsApiExplorer();
appBuilder.Services.AddSwaggerGen();
// Services cors
appBuilder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

var app = appBuilder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// App cors
app.UseHttpsRedirection();
app.UseRouting();
app.UseCors("corsapp");
app.UseAuthorization();

//app.UseCors(prodCorsPolicy);

app.MapControllers();

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
}));

app.use(logger('combined'));
app.use(passport.initialize());
require('./middlewares/passport_middleware');

// Initialize routes
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
  console.log(`Server is listening on http://localhost:${port}`);
});

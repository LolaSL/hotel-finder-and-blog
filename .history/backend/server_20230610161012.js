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
// const session = require("cookie-session");
// const TWO_HOURS = 60 * 60 * 1000 * 13;
// const SESS_SECRET = process.env.SESS_SECRET;
const cookieSession = require('cookie-session');
const keys = require('./middlewares/keys.js');

// function cookieSession(options) {
//   var opts = options || {}

//   // name - previously "opts.key"
//   var name = opts.name || opts.key || 'express:sess';

//   // secrets
//   var keys = opts.keys;
//   if (!keys && opts.secret) keys = [opts.secret];

//   // defaults
//   if (null == opts.overwrite) opts.overwrite = true;
//   if (null == opts.httpOnly) opts.httpOnly = true;
//   if (null == opts.signed) opts.signed = true;

//   if (!keys && opts.signed) throw new Error('.keys required.');

//   debug('session options %j', opts);

//   return function _cookieSession(req, res, next) {
//     var cookies = req.sessionCookies = new cookies(req, res, keys);
//     var sess, json;

//     // to pass to Session()
//     req.sessionOptions = Object.create(opts)
//     req.sessionKey = name

//     req.__defineGetter__('session', function(){
//       // already retrieved
//       if (sess) return sess;

//       // unset
//       if (false === sess) return null;

//       json = cookies.get(name, req.sessionOptions)

//       if (json) {
//         debug('parse %s', json);
//         try {
//           sess = new session(req, decode(json));
//         } catch (err) {
//           // backwards compatibility:
//           // create a new session if parsing fails.
//           // new Buffer(string, 'base64') does not seem to crash
//           // when `string` is not base64-encoded.
//           // but `JSON.parse(string)` will crash.
//           if (!(err instanceof SyntaxError)) throw err;
//           sess = new session(req);
//         }
//       } else {
//         debug('new session');
//         sess = new session(req);
//       }

//       return sess;
//     });

//     req.__defineSetter__('session', function(val){
//       if (null == val) return sess = false;
//       if ('object' == typeof val) return sess = new session(req, val);
//       throw new Error('req.session can only be set as null or an object.');
//     });

//     onHeaders(res, function setHeaders() {
//       if (sess === undefined) {
//         // not accessed
//         return;
//       }

//       try {
//         if (sess === false) {
//           // remove
//           cookies.set(name, '', req.sessionOptions)
//         } else if (!json && !sess.length) {
//           // do nothing if new and not populated
//         } else if (sess.changed(json)) {
//           // save
//           sess.save();
//         }
//       } catch (e) {
//         debug('error saving session %s', e.message);
//       }
//     });

//     next();
//   }
// }
const app = express();

app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
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
app.use(cookieSession({
  name: 'session',
  keys: keys
}))



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
  console.log(`Server is listening on http://localhost:${process.env.PORT || 8080}`);
});
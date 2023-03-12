require("dotenv").config();
const passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
ExtractJwt = require('passport-jwt').ExtractJwt;
const SECRET = process.env.SECRET;
const db = require('../db');

var options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeader();
options.secretOrKey = config.secret;
// const  ExtractJwt = function (req) {
//     let token = null
//     if (req &&  request.cookies.jwt) token = req.cookies['token']
//     return token
// };
    
// const options = {
//     secretOrKey: SECRET,
//     jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt')
// };

passport.use(
    new JwtStrategy(options, async ({ id }, done) => {
        try {
            const { rows } = await db.query(
                'SELECT user_id, email FROM users WHERE user_id = $1',
                [id]
            )

            if (!rows.length) {
                throw new Error('401 not authorized')
            }

            let user = { id: rows[0].user_id, email: rows[0].email }

            return done(null, user)
        } catch (error) {
            console.log(error.message)
            done(null, false)
        }
    })
);
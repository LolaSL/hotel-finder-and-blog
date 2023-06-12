require("dotenv").config();
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// const { Strategy } = require('passport-jwt');
// const SECRET = process.env.SECRET;
const db = require('../db');
const keys = require("./keys")

const cookieExtractor = function (req) {
    let token = null
    if (req && req.cookies) token = req.cookies['token']
    return token
};
    
const options = {
    secretOrKey: SECRET,
    jwtFromRequest: cookieExtractor,
};
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey

passport.use(
 new JwtStrategy(opts, async ({ id }, done) => {
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
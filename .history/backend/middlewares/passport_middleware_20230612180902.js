require("dotenv").config();
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const SECRET = process.env.SECRET;
const db = require('../db');
const keys = require("./keys")


const opts = {
    secretOrKey: SECRET,

};

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
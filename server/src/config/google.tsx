// const passport = require("passport");
// const User = require("../models/User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const callback = 'http://localhost:3000/auth/google/callback'
const client_id = 'const client_id = "10547820426-g94ke317qjsssctc8epuear86u5tf7vp.apps.googleusercontent.com'
const client_secret = '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'

passport.use(

    new GoogleStrategy(
        {
            callbackURL: callback,
            clientID: client_id,
            clientSecret: client_secret,
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log("user profile is: ", profile)
        }
    )
);
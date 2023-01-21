const passport = require('passport');
const { Strategy: GoogleTokenStrategy } = require('passport-google-token');

//put in env eventually
// const callback = 'http://localhost:3000/auth/google/callback'
const client_id = 'const client_id = "10547820426-g94ke317qjsssctc8epuear86u5tf7vp.apps.googleusercontent.com'
const client_secret = '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'

// GOOGLE STRATEGY
// const GoogleTokenStrategyCallback = (accessToken, refreshToken, profile, done) => done(null, {
//     accessToken,
//     refreshToken,
//     profile,
// });

const GoogleTokenStrategyCallback = (accessToken, refreshToken, profile, done) => done(null,{
    accessToken,
    refreshToken,
    profile
});

passport.use(new GoogleTokenStrategy({
    clientID: client_id,
    clientSecret: client_secret,
}, GoogleTokenStrategyCallback));

// promisified authenticate functions
// var authenticateGoogle = (accessToken) => new Promise((resolve, reject) => {
//     console.log('passport authenticating')
//     passport.authenticate('google', { session: false }, (err, data, info) => { //may be just 'google-token'
//         if (err) reject(err);
//         resolve({ data, info });
//     })(accessToken);
// });

var authenticateGoogle = (accessToken) => {
    console.log('passport authenticating')
    // var dataSend: any;
    // var infoSend: any;
    passport.authenticate('google-token', { session: false }, (err, data, info) => { //may be just 'google'
        if (err) console.log(err);
        // dataSend = data
        // infoSend = info
        return ({ data, info });
    })
    // return {dataSend, infoSend}
};

// var authenticateGoogle = (accessToken) => {
//     console.log('this is a function')
// }

// declare module "passport" {
//     export = authenticateGoogle
// }
// module.exports = { authenticateGoogle };
export default authenticateGoogle

// const authenticateGoogle = (accessToken) => await (resolve, reject) => {

// }


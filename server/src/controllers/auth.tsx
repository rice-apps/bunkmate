const googleOAuth = require('../utils/googleOAuth');

exports.login = async (req, res) => {
    try {
        console.log("reached controller")
        // console.log(req)
        const code = req.body.code;
        console.log(code)
        googleOAuth.getProfileInfo(code).then(profile => {
            console.log('profile')
            console.log(profile)
            // const user = {
            //     // googleId: profile.sub,
            //     name: profile.name,
            //     // firstName: profile.given_name,
            //     // lastName: profile.family_name,
            //     email: profile.email,
            //     // profilePic: profile.picture,
            // };
            // res.send(user)
        });
        // res.send({ user });
    } catch (e) {
        console.log(e);
        res.status(401).send();
    }
};
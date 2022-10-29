var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const googleOAuth = require('../utils/googleOAuth');
exports.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        console.log("reached controller");
        // console.log(req)
        const code = req.body.code;
        console.log(code);
        googleOAuth.getProfileInfo(code).then(profile => {
            console.log('profile');
            console.log(profile);
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
    }
    catch (e) {
        console.log(e);
        res.status(401).send();
    }
});
//# sourceMappingURL=auth.js.map
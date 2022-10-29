"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const { OAuth2Client } = require('google-auth-library');
const client_id = "10547820426-g94ke317qjsssctc8epuear86u5tf7vp.apps.googleusercontent.com";
const client_secret = "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";
const client = new OAuth2Client(
// process.env.GOOGLE_CLIENT_ID,
// process.env.GOOGLE_CLIENT_SECRET,
client_id, client_secret, 
/**
 * To get access_token and refresh_token in server side,
 * the data for redirect_uri should be postmessage.
 * postmessage is magic value for redirect_uri to get credentials without actual redirect uri.
 */
'postmessage');
exports.getProfileInfo = (code) => __awaiter(void 0, void 0, void 0, function* () {
    const r = yield client.getToken(code);
    const idToken = r.tokens.id_token;
    client.verifyIdToken({
        idToken: idToken,
        // audience: process.env.GOOGLE_CLIENT_ID,
        audience: client_id,
    }).then(response => {
        const { email_verified, name, email } = response.payload;
        User_1.User.findOne({ email }).exec((err, user) => {
            if (err) {
                console.log("something went wrong");
            }
            else {
                return { email_verified, name, email };
            }
        });
        // if (email_verified) {
        //User.findOne code...
        // }
    });
    // return payload;
});
//# sourceMappingURL=googleOAuth.js.map
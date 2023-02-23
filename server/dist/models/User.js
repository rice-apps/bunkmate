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
exports.User = void 0;
const google_auth_library_1 = require("google-auth-library");
const jwt = require('jsonwebtoken');
const client_id = "10547820426-g94ke317qjsssctc8epuear86u5tf7vp.apps.googleusercontent.com";
const googleClient = new google_auth_library_1.OAuth2Client({
    clientId: `${client_id}`,
    clientSecret: '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'
});
var mongoose = require("mongoose"), Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: String,
    grad_year: String,
    res_college: String,
    major: String,
    minor: String,
    pronouns: String,
    gender: String,
    accommodations: String,
    on_campus: Boolean,
    housing_pref: String,
    roommate_count: String,
    additional_room_info: String,
    personality_traits: [String],
    is_morning_person: Boolean,
    room_temp_pref: String,
    bed_time_pref: String,
    wake_time_pref: String,
    room_usage: [String],
    outing_freq: String,
    relationship_pref: String,
    drinking_pref: String,
    smoking_pref: String,
    roommate_smoking_pref: String,
    roommate_gender_pref: String,
    has_overnight_guest: Boolean,
    cleaning_freq: String,
    additional_prefs: String,
    is_snorer: Boolean,
    additional_habit_info: String,
    pfp: String,
    new_user: Boolean,
    auth: {
        google: {
            id: String,
            token: String
        }
    },
}, {
    methods: {
        generateJWT() {
            const today = new Date();
            const expirationDate = new Date(today);
            expirationDate.setDate(today.getDate() + 60);
            return jwt.sign({
                email: this.email,
                id: this._id,
                exp: expirationDate.getTime() / 1000,
            }, 'secret');
        }
    },
    statics: {
        upsertGoogleUser(email) {
            return __awaiter(this, void 0, void 0, function* () {
                const User = this;
                //might need mongoose.model("User") ??
                // console.log("getting token")
                // let token = await googleClient.getToken(email)
                // console.log("token received")
                // console.log(token)
                // const ticket = await googleClient.verifyIdToken({
                //     idToken: email,
                // });
                // const payload = ticket.getPayload();
                // console.log('got payload')
                // console.log(payload)
                const user = yield User.findOne({ 'email': email });
                // no user was found, lets create a new one
                if (!user) {
                    console.log('no user found');
                    console.log(email);
                    const newUserDict = yield User.create({
                        name: "defaultName",
                        email: email,
                        new_user: true,
                        // 'auth.google': {
                        // id: profile.id,
                        // token: accessToken,
                        // },
                    });
                    // newUser.save() maybe
                    return newUserDict;
                }
                return user;
            });
        },
        findUsers() {
            return __awaiter(this, void 0, void 0, function* () {
                let doc = yield exports.User.find();
                return doc;
            });
        },
        updateUser(filter, update) {
            return __awaiter(this, void 0, void 0, function* () {
                // filter = {email: "go15@rice.edu"}
                // update = {resCollege: "Sid Richardson", smoker: True}
                // update = {newUser: False}
                let doc = yield exports.User.findOneAndUpdate(filter, update);
                console.log("doc");
                console.log(doc);
                return doc;
            });
        }
    }
});
UserSchema.methods.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
    return jwt.sign({
        email: this.email,
        id: this._id,
        exp: expirationDate.getTime() / 1000,
    }, 'secret');
};
exports.User = mongoose.model("User", UserSchema);
//# sourceMappingURL=User.js.map
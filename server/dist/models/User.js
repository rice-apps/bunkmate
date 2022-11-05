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
const jwt = require('jsonwebtoken');
var mongoose = require("mongoose"), Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    auth: {
        google: {
            id: String,
            token: String
        }
    },
    newUser: Boolean,
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
UserSchema.statics.upsertGoogleUser = function ({ email }) {
    return __awaiter(this, void 0, void 0, function* () {
        const User = this;
        const user = yield User.findOne({ 'email': email });
        // no user was found, lets create a new one
        if (!user) {
            const newUser = yield User.create({
                name: "defaultName",
                email: email,
                newUser: true,
                // 'auth.google': {
                // id: profile.id,
                // token: accessToken,
                // },
            });
            return newUser;
        }
        return user;
    });
};
// UserSchema.statics.upsertGoogleUser = async function ({ accessToken, refreshToken, profile }) {
//     const User = this;
//     const user = await User.findOne({ 'auth.google.id': profile.id });
//     // no user was found, lets create a new one
//     if (!user) {
//         const newUser = await User.create({
//             name: profile.displayName || "defaultName", //profile.name
//             email: "superofficialbunkmate@rice.edu", //profile.emails[0].value,
//             'auth.google': {
//                 id: profile.id,
//                 token: accessToken,
//             },
//         });
//         return newUser;
//     }
//     return user;
// };
exports.User = mongoose.model("User", UserSchema);
//# sourceMappingURL=User.js.map
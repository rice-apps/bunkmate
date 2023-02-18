// const mongoosee = require('mongoose');
// const { authenticateGoogle2 } = require('../config/passport');
// import authenticateGoogle from "../config/passport"
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import { User } from "../models/User";
const { User } = require("../models/User");
module.exports = {
    Query: {
        hello: () => 'world',
        getUsers: (_, {}) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User.findUsers();
                return users;
            }
            catch (error) {
                console.log(error);
            }
        })
    },
    Mutation: {
        authGoogle: (_, { email }) => __awaiter(this, void 0, void 0, function* () {
            // console.log('req')
            // console.log(req)
            // console.log('res')
            // console.log(res)
            // req.body = {
            //     // ...req.body,
            //     access_token: accessToken,
            // };
            try {
                // data contains the accessToken, refreshToken and profile from passport
                // console.log("calling passport in mutation")
                // const { data, info } = await authenticateGoogle(accessToken);
                // const stuff = await authenticateGoogle(accessToken);
                // console.log('data')
                // console.log(stuff)
                if (email) {
                    console.log('find user');
                    console.log(email);
                    const res = yield User.upsertGoogleUser(email); //upsert: update or insert
                    console.log(res);
                    console.log(res[0]);
                    console.log(res[1]);
                    console.log(res.email);
                    return {
                        email: res.email,
                        token: "",
                        newUser: res.newUser
                    };
                    // TODO: ADD JWT
                    // if (res.newUser) { //if user already in database, generate a jwt for them
                    //     return ({ //can return more!
                    //         // email: res[0].email,
                    //         // token: res[0].generateJWT(),
                    //         // exists: res[1]
                    //         email: res.email,
                    //         token:"",
                    //         newUser: false
                    //     });
                    // }
                    // else {
                    //     console.log("user needed to be created, onboarding page now")
                    //     return ({ //can return more!
                    //         email: email,
                    //         token: "",
                    //         exists: res.email
                    //     });
                    // }
                }
                return (Error('server error'));
            }
            catch (error) {
                return error;
            }
        }),
        updateUser: (_, { user }) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (user) {
                    console.log("User and their email:");
                    console.log(user);
                    console.log(user.email);
                    const updated_user = User.updateUser({ email: user.email }, user);
                    console.log("UPDATED USER");
                    console.log(updated_user);
                    return updated_user;
                }
            }
            catch (error) {
                console.error(error);
            }
        })
    }
};
//# sourceMappingURL=resolvers.js.map
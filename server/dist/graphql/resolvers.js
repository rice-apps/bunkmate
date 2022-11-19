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
// import { User } from "../models/User";
const { User } = require("../models/User");
module.exports = {
    Query: {
        hello: () => 'world'
    },
    Mutation: {
        authGoogle: (_, { email }) => __awaiter(void 0, void 0, void 0, function* () {
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
                    const res = yield User.checkUser(email); //upsert: update or insert
                    if (res[1]) { //if user already in database, generate a jwt for them
                        return ({
                            email: res[0].email,
                            token: res[0].generateJWT(),
                            exists: res[1]
                        });
                    }
                    else {
                        console.log("user needs to be created");
                        return ({
                            email: email,
                            token: "",
                            exists: res[1]
                        });
                    }
                }
                // if (info) {
                //     console.log(info);
                //     switch (info.code) {
                //         case 'ETIMEDOUT':
                //             return (new Error('Failed to reach Google: Try Again'));
                //         default:
                //             return (new Error('something went wrong'));
                //     }
                // }
                return (Error('server error'));
            }
            catch (error) {
                return error;
            }
        }),
    }
};
//# sourceMappingURL=resolvers.js.map
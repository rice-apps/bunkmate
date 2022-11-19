// const mongoosee = require('mongoose');
// const { authenticateGoogle2 } = require('../config/passport');
import authenticateGoogle from "../config/passport"

// import { User } from "../models/User";
const { User } = require("../models/User");

module.exports = {
    Query: {
        hello: () => 'world'
    },
    Mutation: {
        authGoogle: async (_, { email } ) => { //change to access token later maybe
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
                    console.log('find user')
                    console.log(email)
                    const res = await User.checkUser(email); //upsert: update or insert

                    if (res[1]) { //if user already in database, generate a jwt for them
                        return ({ //can return more!
                            email: res[0].email,
                            token: res[0].generateJWT(),
                            exists: res[1]
                        });
                    }
                    else {
                        console.log("user needs to be created")
                        return ({ //can return more!
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
            } catch (error) {
                return error;
            }
        },
    }
};
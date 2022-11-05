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
                    console.log('upset user')
                    console.log(email)
                    const user = await User.upsertGoogleUser(email); //upsert: update or insert

                    if (user) {
                        return ({ //can return more!
                            name: user.name,
                            email: user.email,
                            token: user.generateJWT(),
                            newUser: user.newUser
                        });
                    }
                    else {
                        console.log("user couldn't be created")
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
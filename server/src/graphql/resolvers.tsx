// const mongoosee = require('mongoose');
// const { authenticateGoogle2 } = require('../config/passport');
// import authenticateGoogle from "../config/passport"

// import { User } from "../models/User";
const { User } = require("../models/User");

module.exports = {
    Query: {
        hello: () => 'world',
        getUsers: async (_, { }) => {
            try {
                const users = await User.findUsers();
                return users;
            }
            catch (error) {
                console.log(error);
            }
        }
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
                    const res = await User.upsertGoogleUser(email); //upsert: update or insert
                    console.log(res)
                    console.log(res[0])
                    console.log(res[1])
                    console.log(res.email)
                    return {
                        email: res.email,
                        token: "",
                        newUser: res.newUser
                    }

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
            } catch (error) {
                return error;
            }
        },
        updateUser: async (_, { email, user }) => { // user is a User object
            try {
                if (email == user.email) {
                    console.log(user)
                    const updated_user = User.updateUser({email: email}, user)
                    return updated_user
                }
            }
            catch (error) {
                console.error(error)
            }
        } 
    }
};
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
            try {
                if (email) {
                    const res = await User.upsertGoogleUser(email); //upsert: update or insert
                    return {
                        email: res.email,
                        token: "",
                        newUser: res.newUser
                    }
                }
                return (Error('server error'));
            } catch (error) {
                return error;
            }
        },
        updateUser: async (_, { email, user }) => { // user is a User object
            try {
                if (email == user.email) {
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
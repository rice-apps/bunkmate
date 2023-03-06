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
                        new_user: res.new_user
                    }
                }
                return (Error('server error'));
            } catch (error) {
                return error;
            }
        },
        updateUser: async (_, { user }) => { // user is a User object
            try {
                if (user) {
                    console.log("User and their email:")
                    console.log(user)
                    console.log(user.email)
                    const updated_user = User.updateUser({email: user.email}, user)
                    console.log("UPDATED USER")
                    console.log(updated_user)
                    return updated_user
                }
            }
            catch (error) {
                console.error(error)
            }
        } 
    }
};
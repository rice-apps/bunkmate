const { User } = require("../models/User");
const { Listing } = require("../models/Listing");

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
        },
        getListingByUser: async (_, { userId }) => {
            var listingdocs = await Listing.find({ owner: userId });
            // var matched = [];
            // for await (var doc of listingdocs) {
            //     console.log(doc._id);
            //     matched.push(doc._id.toString());
            // }

            return listingdocs;
        },
        getListingExceptUser: async (_, { userId }) => {
            var listingdocs = await Listing.find({ owner: {$ne: userId} });
            // var matched = [];
            // for await (var doc of listingdocs) {
            //     console.log(doc._id);
            //     matched.push(doc._id.toString());
            // }

            return listingdocs;
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
        }, 
        createListing: async (_, { listing }) => {
            const newListing = new Listing(listing);
            return await newListing.save();
        }
    }
};
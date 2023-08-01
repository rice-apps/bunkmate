var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { User } = require("../models/User");
const { Listing } = require("../models/Listing");
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
        }),
        // Moved the two new methods to the Query section instead of Mutation since they only perform read operations!
        // Instead of taking the whole user in the request body, just take the userId and then match it to the owner field!
        // See typedefs.tsx for associated changes
        getListingByUser: (_, { userId }) => __awaiter(this, void 0, void 0, function* () {
            // Use await for functions that return a Promise, like the find method
            // The for loop does not need await since none of the operations within the loop return a Promise
            // Match the userId to the owner field instead of the _id field
            var listingdocs = yield Listing.find({ owner: userId });
            // If we decided to take the whole user in the request body, it would be user._id instead of user.id
            // var listingdocs = Listing.find({ _id: user.id })
            // var matched = [];
            // for await (var doc of listingdocs) {
            //     console.log(doc._id);
            //     matched.push(doc._id.toString());
            // }
            return listingdocs;
        }),
        getListingExceptUser: (_, { userId }) => __awaiter(this, void 0, void 0, function* () {
            var listingdocs = yield Listing.find({ owner: { $ne: userId } });
            // var listingdocs = Listing.find({ _id: { $ne: user.id } })
            // var matched = [];
            // for await (var doc of listingdocs) {
            //     console.log(doc._id);
            //     matched.push(doc._id.toString());
            // }
            return listingdocs;
        })
    },
    Mutation: {
        authGoogle: (_, { email }) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (email) {
                    const res = yield User.upsertGoogleUser(email); //upsert: update or insert
                    return {
                        email: res.email,
                        token: "",
                        new_user: res.new_user
                    };
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
        }),
        createListing: (_, { listing }) => __awaiter(this, void 0, void 0, function* () {
            const newListing = new Listing(listing);
            return yield newListing.save();
        })
    }
};
//# sourceMappingURL=resolvers.js.map
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
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
        }),
        getListingByUser: (_, { user }) => __awaiter(this, void 0, void 0, function* () {
            var e_1, _a;
            var listingdocs = Listing.find({ _id: user.id });
            var matched = [];
            try {
                for (var listingdocs_1 = __asyncValues(listingdocs), listingdocs_1_1; listingdocs_1_1 = yield listingdocs_1.next(), !listingdocs_1_1.done;) {
                    var doc = listingdocs_1_1.value;
                    console.log(doc._id);
                    matched.push(doc._id.toString());
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (listingdocs_1_1 && !listingdocs_1_1.done && (_a = listingdocs_1.return)) yield _a.call(listingdocs_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return matched;
        }),
        getListingExceptUser: (_, { user }) => __awaiter(this, void 0, void 0, function* () {
            var e_2, _b;
            var listingdocs = Listing.find({ _id: { $ne: user.id } });
            var matched = [];
            try {
                for (var listingdocs_2 = __asyncValues(listingdocs), listingdocs_2_1; listingdocs_2_1 = yield listingdocs_2.next(), !listingdocs_2_1.done;) {
                    var doc = listingdocs_2_1.value;
                    console.log(doc._id);
                    matched.push(doc._id.toString());
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (listingdocs_2_1 && !listingdocs_2_1.done && (_b = listingdocs_2.return)) yield _b.call(listingdocs_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return matched;
        })
    }
};
//# sourceMappingURL=resolvers.js.map
const jwt = require('jsonwebtoken');

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var UserSchema = new Schema({

    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    resCollege: String,
    phoneNumber: String,
    gradYear: String,
    major: String,
    minor: String,
    pronouns: String,
    sex: String,
    accommodation: String,
    onCampus: Boolean,
    roomType: String,
    numRoommates: Number,
    additionalRoomInfo: String,
    genderPref: String,
    overnightGuests: Boolean,
    roomTemp: String,
    bedTime: String,
    wakeTime: String,
    neatness: String,
    presence: String,
    additionalPrefInfo: String,
    personality: [String], //is this right?
    isMorningPerson: Boolean,
    personalSpace: [String],
    outingFrequency: String,
    coexistCondition: String,
    outgoingness: String,
    smoker: String,
    smokerPref: String,
    additionalHabitInfo: String,
    pfp: String,

    auth: {
        google: {
            id: String,
            token: String
        }
    },
    newUser: Boolean,
},
    {
        methods: {
            generateJWT() {
                const today = new Date();
                const expirationDate = new Date(today);
                expirationDate.setDate(today.getDate() + 60);

                return jwt.sign({
                    email: this.email,
                    id: this._id,
                    exp: expirationDate.getTime() / 1000,
                }, 'secret');
            },
        },
        statics: {
            async upsertGoogleUser(email) {
                const User = this;
                //might need mongoose.model("User") ??

                const user = await User.findOne({ 'email': email });

                // no user was found, lets create a new one
                if (!user) {
                    console.log('no user found')
                    console.log(email)
                    const newUser = await User.create({
                        name: "defaultName", //profile.name
                        email: email, //profile.emails[0].value,
                        newUser: true,
                        // 'auth.google': {
                        // id: profile.id,
                        // token: accessToken,
                        // },
                    });
                    // newUser.save() maybe

                    return newUser;
                }
                return user;
            }
        }
    }
);

UserSchema.methods.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: this.email,
        id: this._id,
        exp: expirationDate.getTime() / 1000,
    }, 'secret');
}
// UserSchema.statics.upsertGoogleUser = async function ({ email }) {
//     const User = this;

//     const user = await User.findOne({ 'email': email });

//     // no user was found, lets create a new one
//     if (!user) {
//         console.log('no user found')
//         console.log(email)
//         const newUser = await User.create({
//             name: "defaultName", //profile.name
//             email: email, //profile.emails[0].value,
//             newUser: true,
//             // 'auth.google': {
//                 // id: profile.id,
//                 // token: accessToken,
//             // },
//         });
//         // newUser.save() maybe

//         return newUser;
//     }
//     return user;
// };

// UserSchema.statics.upsertGoogleUser = async function ({ accessToken, refreshToken, profile }) {
//     const User = this;

//     const user = await User.findOne({ 'auth.google.id': profile.id });

//     // no user was found, lets create a new one
//     if (!user) {
//         const newUser = await User.create({
//             name: profile.displayName || "defaultName", //profile.name
//             email: "superofficialbunkmate@rice.edu", //profile.emails[0].value,
//             'auth.google': {
//                 id: profile.id,
//                 token: accessToken,
//             },
//         });

//         return newUser;
//     }
//     return user;
// };

export const User = mongoose.model("User", UserSchema);
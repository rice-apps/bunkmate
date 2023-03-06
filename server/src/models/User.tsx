// import { userInfo } from "os";
import { OAuth2Client } from "google-auth-library";
// image stuff
// const { createReadStream } = require('fs')
// const { v4: uuidv4 } = require('uuid')
// const { GraphQLUpload } = require('graphql-upload')

const jwt = require('jsonwebtoken');

const client_id = "10547820426-g94ke317qjsssctc8epuear86u5tf7vp.apps.googleusercontent.com"
const googleClient = new OAuth2Client({
    clientId: `${client_id}`,
    clientSecret: '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'
});

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: String,
    grad_year: String,
    res_college: String,
    major: String,
    minor: String,
    pronouns: String,
    gender: String,
    accommodations: String,
    on_campus: Boolean,
    housing_pref: String,
    roommate_count: String,
    additional_room_info: String,
    personality_traits: [String],
    is_morning_person: Boolean,
    room_temp_pref: String,
    bed_time_pref: String,
    wake_time_pref: String,
    room_usage: String,
    outing_freq: String,
    relationship_pref: String,
    drinking_pref: String,
    smoking_pref: String,
    roommate_smoking_pref: String,
    roommate_gender_pref: String,
    has_overnight_guest: Boolean,
    cleaning_freq: String,
    additional_prefs: String,
    is_snorer: Boolean,
    additional_habit_info: String,
    pfp: String,
    new_user: Boolean,
    auth: {
        google: {
            id: String,
            token: String
        }
    },
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
            }
        },
        statics: {
            async upsertGoogleUser(email) {
                const User = this;

                const user = await User.findOne({ 'email': email });

                // no user was found, lets create a new one
                if (!user) {
                    console.log('no user found')
                    console.log(email)
                    const newUserDict = await User.create({
                        name: "defaultName", //profile.name
                        email: email, //profile.emails[0].value,
                        new_user: true,
                        // 'auth.google': {
                        // id: profile.id,
                        // token: accessToken,
                        // },
                    });
                    // newUser.save() maybe

                    return newUserDict;
                }
                return user;
            },
            async findUsers() {
                let doc = await User.find();
                return doc;
            },
            async updateUser(filter, update) {
                //first process image
                console.log("input")
                console.log(update)
                var updatedUser = {}
                if (update.pfp) {
                    // const { filename, mimetype, createReadStream } = await update.pfp
                    // const ext = mimetype.split('/')[1]
                    // const newFilename = `${uuidv4()}.${ext}`

                    // Store the uploaded image data in MongoDB as a Base64-encoded string
                    const buffer = await update.pfp.buffer()
                    const base64Image = buffer.toString('base64')
                    console.log("base 64")
                    console.log(base64Image)
                    updatedUser = {...update, "pfp": base64Image}
                } else {
                    updatedUser = update
                }

                let doc = await User.findOneAndUpdate(filter, updatedUser);
                console.log("output")
                console.log(doc)
                return doc;
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

export const User = mongoose.model("User", UserSchema);
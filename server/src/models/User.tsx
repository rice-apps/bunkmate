var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: String,
});

export const User = mongoose.model("User", UserSchema);
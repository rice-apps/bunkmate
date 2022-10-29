"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose = require("mongoose"), Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String,
    email: String,
});
exports.User = mongoose.model("User", UserSchema);
//# sourceMappingURL=User.js.map
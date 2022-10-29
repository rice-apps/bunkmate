"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose = require("mongoose");
const authRouter = require('./routes/auth');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use('/api', authRouter);
// app.use('/api/', authRouter);
const url = "mongodb+srv://tigerking:wphPpplcHRwNdv29@riceapps2020-21-ppsrv.gcp.mongodb.net/bunkmate_dev?retryWrites=true&w=majority";
mongoose.connect(url);
mongoose.connection.on("connected", function () {
    console.log("Mongoose connected");
    // console.log("Mongoose connected to " + url);
});
app.get('/', (req, res) => {
    res.send('Bunkmate Server!');
});
app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});
module.exports = app;
//# sourceMappingURL=index.js.map
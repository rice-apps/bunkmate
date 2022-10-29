import express from 'express';
const mongoose = require("mongoose");
const authRouter = require('./routes/auth');
const passport = require("passport");
const cors = require('cors')
const cookieParser = require("cookie-parser");

require("./config/passport");
require("./config/google");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors())
app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', authRouter);
// app.use('/api/', authRouter);

const url =
  "mongodb+srv://tigerking:wphPpplcHRwNdv29@riceapps2020-21-ppsrv.gcp.mongodb.net/bunkmate_dev?retryWrites=true&w=majority";
mongoose.connect(url);
mongoose.connection.on("connected", function () {
  console.log("Mongoose connected");
  // console.log("Mongoose connected to " + url);
});
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "http://localhost:3001/profile",
    failureFlash: true,
    successFlash: "Successfully logged in!",
  })
);

app.get('/', (req, res) => {
  res.send('Bunkmate Server!');
});

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});

module.exports = app;
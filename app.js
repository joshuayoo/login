"use strict"

//module
const express = require("express");
const app = express();
const home = require("./src/routes/home");

//veiw
app.set("views", "./src/views");
app.set("view engine", "ejs");

//router
app.use("/", home);

//www/app

module.exports = app;
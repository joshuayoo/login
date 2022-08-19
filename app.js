"use strict"

//module
const express = require("express");
const app = express();

//veiw
app.set("views", "./views");
app.set("view engine", "ejs");

//router
const home = require("./src/routes/home");
app.use("/", home);
app.use("/login", home);

//www/app

module.exports = app;
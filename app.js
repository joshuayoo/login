"use strict"

//module
const express = require("express");
const app = express();
const home = require("./app/src/routes/home");

//veiw
app.set("views", "./app/src/views");
app.set("view engine", "ejs");
app.use(express.static('${__dirname}/app/src/public'));
//router
app.use("/", home);

module.exports = app;
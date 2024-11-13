const express = require("express");
const app = express();
const Restaurant = require("../models/index");
const db = require("../db/connection");

// const Restaurant = db.define("restaurants", {
//     name: Sequelize.STRING,
//     location: Sequelize.STRING,
//     cuisine: Sequelize.STRING
// })

app.use(express.json());
app.use(express.urlencoded())
app.use("/restaurants", require("../routes/restaurants"));



module.exports = app;

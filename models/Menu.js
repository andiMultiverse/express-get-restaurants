const db = require("../db/connection");
const { Model, DataTypes } = require('sequelize');

class Menu extends Model {};

Menu.init({
   title: DataTypes.STRING 
}, {
    sequelize: db,
    modelName: "menu",
});

module.exports = Menu;
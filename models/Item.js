const { Model, DataTypes } = require('sequelize');
const db = require("../db/connection");

class Item extends Model {}

Item.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  vegetarian: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: "item",
});

module.exports = Item;
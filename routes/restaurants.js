const express = require("express");
const restaurant = express.Router()
const Restaurant = require("../models/index");

restaurant.get("/", async (req, res) => {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
  });
  
  restaurant.get("/:id", async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id);
    res.json(restaurant);
  });
  
  restaurant.post("/", async (req, res) => {
    const newRestaurant = await Restaurant.create(req.body);
    res.json(newRestaurant);
  });
  
  restaurant.put("/:id", async (req, res) => {
    const newRestaurant = await Restaurant.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(newRestaurant);
  });
  
  restaurant.delete("/:id", async (req, res) => {
    const deletedRestaurant = await Restaurant.destroy(req.body, {
      where: { id: req.params.id },
    });
    res.json(deletedRestaurant);
  });

module.exports = restaurant;
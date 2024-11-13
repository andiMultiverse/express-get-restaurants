const request = require("supertest");
const app = require("./src/app");
const Restaurant = require("./models/Restaurant.js");
const restaurantsRouter = require("./routes/restaurants");

describe("GET /restaurants", () => {
  test("should return an array of restaurants", async () => {
    // mock datbase
    const fakeRestaurants = [
      { name: "McDonalds", location: "NYC", cuisine: "Fast Food" },
      { name: "Burger King", location: "NYC", cuisine: "Fast Food" },
    ];

    jest.spyOn(Restaurant, "findAll").mockResolvedValue(fakeRestaurants);

    const response = await request(app).get("/restaurants");

    expect(response.body).toEqual(fakeRestaurants);
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toEqual(fakeRestaurants.length);
  });


    test("should return the correct restaurant data", async () => {
      const fakeRestaurant = { id: 1, name: "McDonalds", location: "NYC", cuisine: "Fast Food" };

      jest.spyOn(Restaurant, "findByPk").mockResolvedValue(fakeRestaurant);

      const response = await request(app).get("/restaurants/1");

      expect(response.body).toEqual(fakeRestaurant);
      expect(response.statusCode).toBe(200);
    });
  
    test("should create a new restaurant", async () => {
        const newRestaurant = { name: "McDonalds", location: "NYC", cuisine: "Fast Food" };
    
        jest.spyOn(Restaurant, "create").mockResolvedValue(newRestaurant);
    
        const response = await request(app)
            .post("/restaurants")
            .send(newRestaurant);
    
        expect(response.body).toEqual(newRestaurant);
        expect(response.statusCode).toBe(200);
    })

    test("should update a restaurant", async () => {
        const updatedRestaurant = { name: "McDonalds", location: "NYC", cuisine: "Fast Food" };
    
        jest.spyOn(Restaurant, "update").mockResolvedValue(updatedRestaurant);
    
        const response = await request(app)
            .put("/restaurants/1")
            .send(updatedRestaurant);
    
        expect(response.body).toEqual(updatedRestaurant);
        expect(response.statusCode).toBe(200);
    })

    test("should delete a restaurant", async () => {
        const deletedRestaurant = { name: "McDonalds", location: "NYC", cuisine: "Fast Food" };
    
        jest.spyOn(Restaurant, "destroy").mockResolvedValue(deletedRestaurant);
    
        const response = await request(app)
            .delete("/restaurants/1")
            .send(deletedRestaurant);
    
        expect(response.body).toEqual(deletedRestaurant);
        expect(response.statusCode).toBe(200);
    })
  


});

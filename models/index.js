const Restaurant = require('./Restaurant')
const Item = require('./Item');
const Menu = require('./Menu');

// A Restaurant may have one or more Menu(s), but every Menu has one Restaurant 
// - There are also many Item(s) included in a Menu and an Item can be on many Menus

Restaurant.hasMany(Menu, {
    foreignKey: 'restaurant_id'
});
Menu.belongsTo(Restaurant, {
    foreignKey: 'restaurant_id'
});

Menu.belongsToMany(Item, {
    through: 'menu_items',
    foreignKey: 'menu_id'
});
Item.belongsToMany(Menu, {
    through: 'menu_items',
    foreignKey: 'item_id'
});






module.exports = { Restaurant, Menu, Item };
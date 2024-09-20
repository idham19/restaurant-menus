const { Restaurant } = require("./Restaurant");
const { Menu } = require("./Menu");
const { Item } = require("./Item");
//One to Many Association
Restaurant.hasMany(Menu);
Menu.belongsTo(Restaurant);

// Menu Item association Many to Many
Menu.belongsToMany(Item, { through: "MenuItems" });
Item.belongsToMany(Menu, { through: "MenuItems" });
module.exports = { Restaurant, Menu };

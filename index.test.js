const { sequelize } = require("./db");
const { Restaurant, Menu } = require("./models/index");
const { Item } = require("./models/Item");
const { seedRestaurant, seedMenu, seedItem } = require("./seedData");

describe("Restaurant,Menu and Item Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Restaurant", async () => {
    // TODO - write test
    const createRestaurant = await Restaurant.create(seedRestaurant[0]);
    expect(createRestaurant).toEqual(
      expect.objectContaining(seedRestaurant[0])
    );
  });

  test("can create a Menu", async () => {
    // TODO - write test
    const createMenu = await Menu.create(seedMenu[0]);
    expect(createMenu).toEqual(expect.objectContaining(seedMenu[0]));
  });
  test("can creat Item instance", async () => {
    const item = await Item.create(seedItem[0]);
    expect(item.name).toBe(seedItem[0].name);
  });

  test("can find Restaurants", async () => {
    // TODO - write testconst [foundUser] = await User.findAll();
    const Allrestaurants = await Restaurant.findAll();
    expect(Allrestaurants.length).toBeGreaterThan(0);
    expect(Allrestaurants[0].name).toEqual("AppleBees");
  });
  // test to check Item instance can be created

  test("can find Menus", async () => {
    // TODO - write test
    const menu = await Menu.findAll();

    expect(menu.length).toBeGreaterThan(0);
    expect(menu[0].title).toEqual("Breakfast");
  });

  test("can find Items", async () => {
    const findAllItems = await Item.findAll();
    console.log(findAllItems[0]);
    const firstItem= await findAllItems[0]
    const firstItemName= await firstItem.name
    
    expect(findAllItems.length).toBeGreaterThan(0);
    expect(firstItemName).toBe(seedItem[0].name);
  });
  test("can delete Restaurants", async () => {
    // TODO - write test
    const deletedRestaurant = await Restaurant.destroy({
      where: { id: 1 },
    });
    const restaurant = await Restaurant.findByPk(1);
    expect(restaurant).toBeNull();
  });
});
// describe("Item Model test", async () => {
//   beforeAll(async () => {
//     // the 'sync' method will create tables based on the model class
//     // by setting 'force:true' the tables are recreated each time the
//     // test suite is run
//     await sequelize.sync({ force: true });
//   });

// });

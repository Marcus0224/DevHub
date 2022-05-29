const orderSeeds = require('./orderSeeds.json')
const userSeeds = require('./userSeeds.json')
const db = require('../config/connection');
const { Order, User } = require('../models');

db.once("open", async () => {
  try {
    await Order.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Order.create(orderSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("All Done");
  process.exit(0);
})
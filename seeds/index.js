const seedUsers = require("./user-seeds");
const seedCurrencies = require("./currency-seeds");
const seedUserCurrencies = require("./user-currency-seeds");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({
    force: true,
  });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedCurrencies();
  console.log("\n----- CURRENCIES SEEDED -----\n");

  await seedUserCurrencies();
  console.log("\n----- USERCURRENCIES SEEDED -----\n");

  process.exit(0);
};

seedAll();
